import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, describe, expect, it } from 'vitest';
import { galleryOrder, layout } from '../data/restorations';
import en from '../i18n/locales/en';
import { I18nProvider } from '../i18n/I18nProvider';
import { Gallery } from './Gallery';

// jsdom has no modal dialog support yet.
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function (this: HTMLDialogElement) {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = function (this: HTMLDialogElement) {
    this.open = false;
    this.dispatchEvent(new Event('close'));
  };
});

function setup() {
  window.localStorage.setItem('familyframe.locale', 'en');
  render(
    <I18nProvider>
      <Gallery />
    </I18nProvider>,
  );
}

const title = (index: number) => en.pairs[galleryOrder[index].id].title;

describe('Gallery', () => {
  it('renders every "more" example as one card holding both photos', () => {
    setup();
    const cards = Array.from(document.querySelectorAll<HTMLElement>('#gallery-more > li'));
    expect(cards).toHaveLength(layout.moreInitial);
    cards.forEach((card, index) => {
      const pair = en.pairs[layout.more[index].id];
      expect(within(card).getByAltText(`Original: ${pair.alt}`)).toBeInTheDocument();
      expect(within(card).getByAltText(`Restored: ${pair.alt}`)).toBeInTheDocument();
      expect(within(card).getAllByRole('button')).toHaveLength(1);
    });
  });

  it('shows technique chips for pairs that list them', () => {
    setup();
    const card = screen.getByRole('button', { name: /A young family/ }).closest('li')!;
    expect(within(card).getByText('Recropping')).toBeInTheDocument();
    expect(within(card).getByText('Person removal')).toBeInTheDocument();
  });

  it('lightbox steps one restoration pair at a time', async () => {
    const user = userEvent.setup();
    setup();
    await user.click(screen.getAllByRole('button', { name: /View larger/ })[0]);

    const dialog = screen.getByRole('dialog', { hidden: true });
    const heading = () => within(dialog).getByRole('heading', { level: 2, hidden: true });
    expect(heading()).toHaveTextContent(title(0));
    expect(dialog).toHaveTextContent(`Photo 1 of ${galleryOrder.length}`);

    const next = within(dialog).getByRole('button', { name: 'Next photo', hidden: true });
    await user.click(next);
    expect(heading()).toHaveTextContent(title(1));
    expect(dialog).toHaveTextContent(`Photo 2 of ${galleryOrder.length}`);

    await user.click(within(dialog).getByRole('button', { name: 'Previous photo', hidden: true }));
    await user.click(within(dialog).getByRole('button', { name: 'Previous photo', hidden: true }));
    expect(heading()).toHaveTextContent(title(galleryOrder.length - 1));
  });

  it('lightbox shows both photos of a paired restoration with its description', async () => {
    const user = userEvent.setup();
    setup();
    await user.click(screen.getByRole('button', { name: /Open larger view: A young family/ }));
    const dialog = screen.getByRole('dialog', { hidden: true });
    const pair = en.pairs['16_couple_with_baby'];
    expect(within(dialog).getByText(pair.description)).toBeInTheDocument();
    expect(within(dialog).getByAltText(`Original: ${pair.alt}`)).toBeInTheDocument();
    expect(within(dialog).getByAltText(`Restored: ${pair.alt}`)).toBeInTheDocument();
    expect(within(dialog).queryByRole('slider', { hidden: true })).toBeNull();
  });
});
