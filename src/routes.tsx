import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdAccessTime,
  MdOutlineFileCopy,
  MdWarehouse,
  MdLock,
  MdBookmarks,
} from "react-icons/md";

import { RoutesType } from './types'
// Admin Imports
import MainDashboard from 'views/admin/default';
import Warehouse from 'views/admin/warehouse';
import CountSession from 'views/admin/session';
import SessionDetails from 'views/admin/session/components/sessionDetails';
import Report from 'views/admin/report';
import Reconciliation from 'views/admin/reconciliation';

import CountDashboard from 'views/count-lead/default';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    path: "/default",
    name: "Dashboard",
    icon: (
      <Icon as={MdHome} width="20px" height="20px" mt={1} color="inherit" />
    ),
    component: MainDashboard,
    layout: "/admin",
    roles: ["admin"],
  },
  {
    path: "/session",
    name: "Count Session",
    icon: (
      <Icon
        as={MdAccessTime}
        width="20px"
        height="20px"
        mt={1}
        color="inherit"
      />
    ),
    component: CountSession,
    layout: "/admin",
    roles: ["admin"],
  },
  {
    path: "/reconciliation",
    name: "Reconciliation",
    icon: (
      <Icon
        as={MdBookmarks}
        width="20px"
        height="20px"
        mt={1}
        color="inherit"
      />
    ),
    component: Reconciliation,
    layout: "/admin",
    roles: ["admin"],
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    icon: (
      <Icon
        as={MdWarehouse}
        width="20px"
        height="20px"
        mt={1}
        color="inherit"
      />
    ),
    component: Warehouse,
    layout: "/admin",
    roles: ["admin"],
  },
  {
    path: "/report",
    name: "Report",
    icon: (
      <Icon
        as={MdOutlineFileCopy}
        width="20px"
        height="20px"
        mt={1}
        color="inherit"
      />
    ),
    component: Report,
    layout: "/admin",
    roles: ["admin"],
  },
  {
    path: "/default",
    name: "Dashboard",
    icon: (
      <Icon as={MdHome} width="20px" height="20px" mt={1} color="inherit" />
    ),
    component: CountDashboard,
    layout: "/count-lead",
    roles: ["count-lead"],
  },
  // {
  // 	name: 'Sign In',
  // 	layout: '/auth',
  // 	path: '/sign-in',
  // 	icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  // 	component: SignInCentered
  // },
  //   {
  //     name: "NFT Marketplace",
  //     layout: "/admin",
  //     path: "/nft-marketplace",
  //     icon: (
  //       <Icon
  //         as={MdOutlineShoppingCart}
  //         width="20px"
  //         height="20px"
  //         color="inherit"
  //       />
  //     ),
  //     component: NFTMarketplace,
  //     secondary: true,
  //   },
  // {
  // 	name: 'Data Tables',
  // 	layout: '/admin',
  // 	icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  // 	path: '/data-tables',
  // 	component: DataTables
  // },
  // {
  // 	name: 'Profile',
  // 	layout: '/admin',
  // 	path: '/profile',
  // 	icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  // 	component: Profile
  // },
  // {
  // 	name: 'Sign In',
  // 	layout: '/auth',
  // 	path: '/sign-in',
  // 	icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  // 	component: SignInCentered
  // },
  // {
  // 	name: 'RTL Admin',
  // 	layout: '/rtl',
  // 	path: '/rtl-default',
  // 	icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  // 	component: RTL
  // }
];

export default routes;
