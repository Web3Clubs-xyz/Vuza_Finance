// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const lender = {
  id: 'lender',
  title: 'Dashboard',
  children: [
    {
      id: 'defaultl',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'swap_tokens',
      title: 'Swap Tokens',
      type: 'item',
      url: '/swap_tokens',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default lender;
