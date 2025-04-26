import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('manage', 'routes/Manage.jsx'),
  route('profile', 'routes/profile.jsx'),
] satisfies RouteConfig;
