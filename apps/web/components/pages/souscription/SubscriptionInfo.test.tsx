import { render } from '@testing-library/react';
import SubscriptionInfo from './SubscriptionInfo';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    const t = (key: string) => key;
    t.rich = (key: string, replacements: { br: Function }) => {
      if (replacements && replacements.br) {
        replacements.br();
      }
      return key;
    };
    return t;
  },
}));

describe('SubscriptionInfo component', () => {
  it('should render Highlight composant', async () => {
    const { container } = render(<SubscriptionInfo />);

    const highlightElement = container.querySelector('.fr-highlight');

    expect(highlightElement).not.toBeNull();
    expect(highlightElement).toHaveClass('fr-highlight');
  });

  it('should render text correctly', async () => {
    const { getByText } = render(<SubscriptionInfo />);

    const titleElement = getByText('title');
    const priceElement = getByText('price');
    const socialTariffElement = getByText('socialTariff');
    const subContentElement = getByText('subContent');

    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(socialTariffElement).toBeInTheDocument();
    expect(subContentElement).toBeInTheDocument();
  });
});