import ContactPage from '../pages/contact/contact.page';
import NotFound from '../pages/errors/not-found.page';
import HomePage from '../pages/home/home.page';

const appRoute = [
    {
        path: '',
        element: <HomePage />
    },
    {
        path: 'contact',
        element: <ContactPage />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default appRoute;