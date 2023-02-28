import ContactPage from '../pages/contact/contact.page';
import NotFound from '../pages/errors/not-found.page';
import FruitsPage from '../pages/fruits/fruits.page';
import FruitsDetailPage from '../pages/fruits/pages/fruit-detail.page';
import FruitsIndexPage from '../pages/fruits/pages/fruits-index.page';
import HomePage from '../pages/home/home.page';

const appRoute = [
    {
        path: '',
        element: <HomePage />
    },
    {
        path: 'fruits',
        element: <FruitsPage />,
        children: [
            {
                index: true,
                element: <FruitsIndexPage />
            },
            {
                path: ':fruitId',
                element: <FruitsDetailPage />
            }
        ]
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