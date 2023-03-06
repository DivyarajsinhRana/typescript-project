import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '../data'

const Root: FC = () => {
  const routing = useRoutes(routes);
  return routing
}
export default Root
