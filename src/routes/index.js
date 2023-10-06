import HomePage from '../pages/Home';
import { route } from './configs';

const publicRoutes = [{ path: route.home, element: HomePage }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
