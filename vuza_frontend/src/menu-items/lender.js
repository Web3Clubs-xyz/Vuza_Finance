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
    }
  ]
};

export default lender;
