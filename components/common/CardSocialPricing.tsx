import { Card } from '@codegouvfr/react-dsfr/Card';
import { useTranslations } from 'next-intl';

export default function CardSocialPricing() {
  const t = useTranslations('CardSocialPricing');

  return (
    <Card
      desc={t('cardDescription')}
      enlargeLink
      endDetail={t('cardDetail')}
      imageAlt="texte alternatif de l’image"
      linkProps={{
        href: '#',
      }}
      title={t('cardTitle')}
    />
  );
}
