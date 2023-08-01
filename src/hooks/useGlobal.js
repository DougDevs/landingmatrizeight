import { useTranslation } from 'react-i18next'

import logo from '../assets/images/logo.png'

export const useGlobal = () => {
  const { t } = useTranslation()

  return {
    defaultSeo: {
      metaTitle: t('Foresteria Antica Farmacia'),
      metaDescription: t('anticafarmacia_desc'),
    },

    contacts: {
      mobile1: { displayValue: '47999516182', href: '47999516182' },
      mobile2: { displayValue: '47999516182', href: '47999516182' },
      whatsapp: {
        displayValue: '47999516182',
        href: 'https://wa.me/5547999516182',
      },
      email: {
        displayValue: 'contato@scdatalink.com',
        href: 'mailto:contato@scdatalink.com',
      },
      address: {
        displayValue: 'Via Nazionale, 4, Cedegolo, 25051, Brescia, Italia',
        href: '',
      },
    },

    fiscal: {
      businessName: 'Foresteria Antica Farmacia',
      vatNumber: '1234567890',
      legalEmail: 'contato@scdatalink.com',
      legalAddress: 'Via Nazionale, 4, Cedegolo, 25051, Brescia, Italia',
    },

    logo,
  }
}
