import Rooms from './layouts/rooms';
import MainPage from './components/page/mainPage';
import About from './components/page/aboutPage/about';
import Services from './components/page/servicesPage/services';
import News from './components/page/newsPage/news';
import Contacts from './components/page/contactsPage/contacts';
import AdminPanel from './components/common/adminPanel';
import BookingRoom from './components/common/booking/bookingRoom';
import LoginPage from './components/page/loginPage/loginPage';

const routes = [
    { path: '/rooms/:booking?/:roomId?', name: 'Rooms', component: Rooms },
    { path: '/rooms/booking', name: 'BookingRoom', component: BookingRoom },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/adminPanel', name: 'AdminPanel', component: AdminPanel },
    { path: '/about', name: 'About', component: About },
    { path: '/services', name: 'Services', component: Services },
    { path: '/news', name: 'News', component: News },
    { path: '/contacts', name: 'Contacts', component: Contacts },
    { path: '/', name: 'Main Page', component: MainPage, exact: true }
];

export default routes;
