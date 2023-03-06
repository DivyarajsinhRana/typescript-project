import { FC, useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom';
import { MyRoutes, routes } from '../../data';

interface IHeaderProps {
  title?: string | undefined
}

const Header: FC<IHeaderProps> = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>('')
  // Find the active route based on the current location

 
const findActiveRoute = useCallback((routes: MyRoutes[], pathname: string): void => {
  routes.forEach((item) => {
    if (pathname === item.location) {
      setPageTitle(item.header);
    }
    if (item.children.length > 0) {
      findActiveRoute(item.children, pathname);
    }
  });
}, []); // add dependencies if necessary

  // function findActiveRoute(routes: MyRoutes[], pathname: string): void {
   
  // }
  useEffect(() => {
  findActiveRoute(routes, location.pathname);
  }, [findActiveRoute,location.pathname])
  return (
    <div style={{ width: '100%', backgroundColor: 'black', color: 'white' }}>
      header + {pageTitle}
    </div>
  )
}

export default Header
