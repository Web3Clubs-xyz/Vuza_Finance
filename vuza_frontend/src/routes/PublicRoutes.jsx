import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Logout from 'views/pages/authentication3/LogOut';
import ProtectedRoute from './Protectedroute';
import PublicLayout from 'layout/PublicLayout';
// import AdminDashboard from 'views/AdminDashboard';
// import PoolView from 'views/pages/pools/PoolView';

// dashboard routing
const AdminDashboard = Loadable(lazy(() => import('views/AdminDashboard')));
const BorrowerDashboardDefault = Loadable(lazy(() => import('views/BorrowerDashboard')));
const LenderDashboardDefault = Loadable(lazy(() => import('views/LenderDashboard')));
const GurantorPoolView = Loadable(lazy(() => import('views/pages/pools/GurantorPoolView')));
const LenderPoolView = Loadable(lazy(() => import('views/pages/pools/LenderPoolView')));
const Loans = Loadable(lazy(() => import('views/pages/loans/Loans')));
const LoansCreate = Loadable(lazy(() => import('views/pages/loans/LoansCreate')));
const LoansView = Loadable(lazy(() => import('views/pages/loans/LoansView')));
const Institutions = Loadable(lazy(() => import('views/pages/admin/Institutions')));
const InstitutionsViewEdit = Loadable(lazy(() => import('views/pages/admin/InstitutionsViewEdit')));



// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// const Logout = Loadable(lazy(() => import('views/pages/authentication3/Logout')));

// ==============================|| MAIN ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <PublicLayout/>,
  children: [
    {
      path: '/',
      element: <LenderDashboardDefault />
    },
    {
      path: 'logout',
      element: <Logout />
    },
    {
      path: 'pool',
      children: [
        {
          path: ':guid/guarantor',
          element: <GurantorPoolView/>
        },
        {
          path: ':guid/lender',
          element: <LenderPoolView/>
        }
      ]
    },
  ]
};

export default PublicRoutes;
