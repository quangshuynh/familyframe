import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { restorations } from '../data/restorations';
import { I18nProvider } from '../i18n/I18nProvider';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const item = restorations['17_wedding_closeup'];

function setup(props: Partial<Parameters<typeof BeforeAfterSlider>[0]> = {}) {
  render(
    <I18nProvider>
      <BeforeAfterSlider item={item} sizes="100vw" {...props} />
    </I18nProvider>,
  );
  return screen.getByRole('slider');
}

describe('BeforeAfterSlider', () => {
  it('renders an accessible slider starting at 50%', () => {
    const slider = setup();
    expect(slider).toHaveAttribute('aria-valuenow', '50');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
    expect(slider).toHaveAccessibleName(/So sánh ảnh gốc/);
    expect(screen.getByAltText(/^Ảnh gốc:/)).toBeInTheDocument();
    expect(screen.getByAltText(/^Sau phục hồi:/)).toBeInTheDocument();
  });

  it('moves with the keyboard and clamps at the ends', async () => {
    const user = userEvent.setup();
    const slider = setup();
    slider.focus();
    await user.keyboard('{ArrowRight}');
    expect(slider).toHaveAttribute('aria-valuenow', '52');
    await user.keyboard('{Home}');
    expect(slider).toHaveAttribute('aria-valuenow', '0');
    await user.keyboard('{ArrowLeft}');
    expect(slider).toHaveAttribute('aria-valuenow', '0');
    await user.keyboard('{End}');
    expect(slider).toHaveAttribute('aria-valuenow', '100');
    expect(slider).toHaveAttribute('aria-valuetext', 'Đang hiện 0% ảnh sau phục hồi');
  });

  it('lazy-loads images outside the hero by default', () => {
    setup();
    for (const img of screen.getAllByRole('img')) expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('renders an expand button only when onExpand is provided', async () => {
    const onExpand = vi.fn();
    setup({ onExpand });
    await userEvent.click(screen.getByRole('button', { name: /Xem lớn/ }));
    expect(onExpand).toHaveBeenCalledOnce();
  });
});
