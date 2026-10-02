import { ArrowIcon, CheckIcon } from '../components/icons';
import { href, SECTION_IDS } from '../config/sections';
import { formatPrice, plans } from '../data/pricing';
import { useI18n } from '../i18n/context';
import './Pricing.css';

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id={SECTION_IDS.pricing} className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{t.pricing.eyebrow}</p>
          <h2 id="pricing-title" className="section-title">
            {t.pricing.title}
          </h2>
          <p className="lead">{t.pricing.lead}</p>
        </header>

        <ul role="list" className="pricing__plans">
          {plans.map((plan) => {
            const copy = t.pricing.plans[plan.id];
            const featuresId = `plan-${plan.id}-features`;
            return (
              <li
                key={plan.id}
                className={`pricing__plan${plan.highlight ? ' pricing__plan--highlight' : ''}`}
                data-reveal
              >
                <article aria-labelledby={`plan-${plan.id}-name`}>
                  <h3 id={`plan-${plan.id}-name`} className="pricing__name">
                    {copy.name}
                  </h3>
                  <p className="pricing__price">
                    <span className="pricing__amount">{formatPrice(plan.price)}</span>
                    <span className="pricing__unit">{copy.unit}</span>
                  </p>
                  <p className="pricing__summary">{copy.summary}</p>
                  <p id={featuresId} className="pricing__features-label">
                    {t.pricing[plan.featureLabel]}
                  </p>
                  <ul role="list" className="pricing__features" aria-labelledby={featuresId}>
                    {copy.features.map((feature) => (
                      <li key={feature}>
                        <CheckIcon size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="pricing__assurance" data-reveal>
          <div>
            <p className="pricing__assurance-title">{t.pricing.assuranceTitle}</p>
            <p className="muted">{t.pricing.assuranceBody}</p>
          </div>
          <a className="button button--light" href={href('contact')}>
            {t.pricing.cta}
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
