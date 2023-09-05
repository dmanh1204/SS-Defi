import { ComingSoonPage, FaucetPage } from '../pages';
import { route } from './configs';

const publicRoutes = [
    { path: route.faucet, element: FaucetPage },
    { path: '*', element: ComingSoonPage },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
