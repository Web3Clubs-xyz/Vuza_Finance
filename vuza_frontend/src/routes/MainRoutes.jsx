import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Logout from 'views/pages/authentication3/LogOut';
import ProtectedRoute from './Protectedroute';
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
const ComplianceViewEdit = Loadable(lazy(() => import('views/pages/compliance/ComplianceViewEdit')));




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

const MainRoutes = {
  path: '/',
  element: <ProtectedRoute> <MainLayout /> </ProtectedRoute>,
  children: [
    // {
    //   path: '/',
    //   element: <DashboardDefault />
    // },
    {
      path: '/dashboard',
      children: [
        {
          path: 'borrower',
          element: <BorrowerDashboardDefault />
        },
        {
          path: 'borrower/:guid/compliance/edit',
          element: <ComplianceViewEdit />
        },
        // {
        //   path: 'dashboard/lender',
        //   element: <LenderDashboardDefault />
        // }
      ]
    },
    {
      path: 'loans',
      children: [
        {
          path: 'all',
          element: <Loans/>
        },
        {
          path: 'create',
          element: <LoansCreate/>
        },
        {
          path: 'view',
          element: <LoansView/>
        }
      ]
    },
    {
      path: 'institutions',
      children: [
        {
          path: 'all',
          element: <Institutions/>
        },
        {
          path: ':guid/view',
          element: <InstitutionsViewEdit/>
        },
        {
          path: ':guid/edit',
          element: <InstitutionsViewEdit/>
        }
      ]
    },

    {
      path: 'admin',
      children: [
        {
          path: 'dashboard',
          element: <AdminDashboard />
        }
      ]
    },
    {
      path: 'logout',
      element: <Logout />
    }
  ]
};

export default MainRoutes;
