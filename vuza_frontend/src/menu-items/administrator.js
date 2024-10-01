// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Admin Dashboard',
      type: 'item',
      url: '/admin/dashboard',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'default3',
      title: 'Institutions',
      type: 'item',
      url: '/institutions/all',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default utilities;
