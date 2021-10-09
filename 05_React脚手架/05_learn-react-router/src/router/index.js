import { Index, About, Login, NotMatch, AountCulture, AountFood, AountJion } from '../app.js';

const routes = [
    {
        path: '/',
        exact: true,
        component: Index,
    },
    {
        path: '/about',
        component: About,
        routes: [
            {
                path: '/about',
                exact: true,
                component: AountCulture
            },
            {
                path: '/about/food',
                component: AountFood
            },
            {
                path: '/about/join',
                component: AountJion
            }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        component: NotMatch,
    }
];

export default routes;