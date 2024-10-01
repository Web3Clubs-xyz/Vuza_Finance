// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const borrower = {
  id: 'borrower',
  title: 'Dashboard',
  children: [
    {
      id: 'defaultb',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/borrower',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default borrower;
