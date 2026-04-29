import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'CSRA Mesh',
  id: 'csra-mesh',
  logo: logoImage,
  seo: {
    title: 'CSRA Mesh — Meshtastic Community',
    description:
      'A Meshtastic enthusiasts community in the Central Savannah River Area (CSRA). Building an off-grid mesh network across Augusta, Evans, Grovetown, North Augusta, Aiken, and beyond.',
    author: 'CSRA Mesh Community',
    image: previewImage,
  },
  colors: {
    primary: '#2563eb',
    secondary: '#16a34a',
    neutral: '#b9bec4',
    outline: '#f59e0b',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'FAQs & Guides',
        href: '/faqs',
      },
      {
        type: 'link',
        label: 'EmComm',
        href: '/emcomm',
      },
      {
        type: 'link',
        label: 'Events',
        href: '/events',
      },
      {
        type: 'link',
        label: 'Links',
        href: '/links',
      },
      {
        type: 'link',
        label: 'Join Discord',
        href: 'https://discord.gg/mgzj2PmhKf',
        icon: 'lucide:message-circle',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'Discord',
      href: 'https://discord.gg/mgzj2PmhKf',
      icon: 'lucide:message-circle',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/g/15wMGLcU8Q/',
      icon: 'lucide:users',
    },
  ],
})
