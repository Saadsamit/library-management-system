import { Router } from 'express';
import basicRoute from '../modules/basic';
import bookRoute from '../modules/book/book.route';
import memberRoute from '../modules/member/member.route';

interface routeInterface {
  path: string;
  route: Router;
}

const router = Router();

const moduleRoutes: routeInterface[] = [
  {
    path: '/',
    route: basicRoute,
  },
  {
    path: '/books',
    route: bookRoute,
  },
  {
    path: '/members',
    route: memberRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router