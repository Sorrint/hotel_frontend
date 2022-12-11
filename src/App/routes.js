import Rooms from './layouts/rooms';
import MainPage from './components/page/mainPage';
import About from './components/page/aboutPage/about';
import Services from './components/page/servicesPage/services';
import News from './components/page/newsPage/news';
import Contacts from './components/page/contactsPage/contacts';
import AdminPanel from './components/common/adminPanel';
import LoginPage from './components/page/loginPage/loginPage';
import LogOut from './layouts/logOut';
import Users from './layouts/users';
import EditUserData from './components/ui/editUserData';
import UserBookings from './components/ui/userBookings';
import UserProfile from './components/ui/userProfile';
import AllBookings from './components/ui/allBookings';
import RoomsData from './components/ui/roomsData';
import EditRoomData from './components/ui/editRoomData';

export const publicRoutes = [
    { path: '/', name: 'Main Page', component: MainPage, exact: true },
    { path: '/rooms/:roomId?', name: 'Rooms', component: Rooms },
    { path: '/booking', name: 'Booking', component: Rooms, protected: true },
    { path: '/logout', name: 'LogOut', component: LogOut },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/adminPanel', name: 'AdminPanel', component: AdminPanel },
    { path: '/about', name: 'About', component: About },
    { path: '/services', name: 'Services', component: Services },
    { path: '/news', name: 'News', component: News },
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
