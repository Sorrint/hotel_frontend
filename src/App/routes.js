import Rooms from './layouts/rooms';
import LogOut from './layouts/logOut';
import Users from './layouts/users';

import AboutPage from './components/page/aboutPage';
import Contacts from './components/page/contactsPage';
import LoginPage from './components/page/loginPage';
import MainPage from './components/page/mainPage';
import NewsPage from './components/page/newsPage';
import Services from './components/page/servicesPage';

import AdminPanel from './components/common/adminPanel';
import EditUserData from './components/ui/editUserData';
import UserProfile from './components/ui/userProfile';
import RoomsData from './components/ui/room/roomsData';
import EditRoomData from './components/ui/editRoomData';
import AllBookings from './components/ui/booking/allBookings';
import UserBookings from './components/ui/booking/userBookings';

export const publicRoutes = [
    { path: '/', name: 'Main Page', component: MainPage, exact: true },
    { path: '/rooms/:roomId?', name: 'Rooms', component: Rooms },
    { path: '/booking', name: 'Booking', component: Rooms, protected: true },
    { path: '/logout', name: 'LogOut', component: LogOut },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/adminPanel', name: 'AdminPanel', component: AdminPanel },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/services', name: 'Services', component: Services },
    { path: '/news', name: 'News', component: NewsPage },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/users/:userId?/:route?', name: 'Users', component: Users, protected: true, exact: true }
];

export const userRoutes = [
    { pathname: '/edit', name: 'edit', component: EditUserData },
    { pathname: '/profile', name: 'profile', component: UserProfile },
    { pathname: '/myBookings', name: 'userBookings', component: UserBookings },
    {
        pathname: '/allBookings',
        name: 'bookingsList',
        component: AllBookings,
        protected: true,
        condition: 'isAdmin',
        redirect: '/profile'
    },
    {
        pathname: '/roomsList',
        name: 'roomsList',
        component: RoomsData,
        protected: true,
        condition: 'isAdmin',
        redirect: '/profile'
    },
    {
        pathname: '/editRoom',
        name: 'editRoom',
        component: EditRoomData,
        protected: true,
        condition: 'isAdmin',
        redirect: '/profile'
    }
];
