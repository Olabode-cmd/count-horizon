import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdAccessTime,
  MdOutlineFileCopy,
  MdWarehouse,
} from "react-icons/md";

// Admin Imports
import MainDashboard from 'views/admin/default';
import Warehouse from 'views/admin/warehouse';
import CountSession from 'views/admin/session';
import Report from 'views/admin/report';

// Auth Imports
// import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: (
      <Icon as={MdHome} width="20px" height="20px" mt={1} color="inherit" />
    ),
    component: MainDashboard,
  },
  {
    name: "Count Session",
    layout: "/admin",
    path: "/session",
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
  },
  {
    name: "Warehouse",
    layout: "/admin",
    path: "/warehouse",
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
  },
  {
    name: "Report",
    layout: "/admin",
    path: "/report",
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
  },
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
