import { ReactElement } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import ProfilePosts from './pages/ProfilePosts'
import ProfilePhotos from './pages/ProfilePhotos'
import ProfilePeople from './pages/ProfilePeople'
import NotFound from './pages/NotFound'
import MainLayout from './layout/MainLayout'

export interface MyRoutes {
  path: string
  element: ReactElement<any, any>
  children: MyRoutes[]
  header: string
  parent?: MyRoutes
  location?: string
}

export const routes: MyRoutes[] = [
  {
    path: '/',
    element: <Home />,
    children: [],
    header: 'Home',
  },
  {
    path: 'layout/*',
    element: <MainLayout />,
    children: [
      {
        path: 'about',
        element: <About />,
        children: [],
        header: 'About',
        location: '/layout/about',
      },
      {
        path: 'profile/*',
        element: <Profile />,
        children: [
          {
            path: 'posts',
            element: <ProfilePosts />,
            children: [],
            header: 'Profile Post',
            location: '/layout/profile/posts',
          },
          {
            path: 'photos',
            element: <ProfilePhotos />,
            children: [],
            header: 'Profile Photos',
            location: '/layout/profile/photos',
          },
          {
            path: ':id',
            element: <ProfilePeople />,
            children: [],
            header: 'Profile Peaoples',
            location: '/layout/profile/photos',
          },
        ],
        header: 'Profile',
        location: '/layout/profile',
      },
    ],
    header: 'Layout',
    location: '/layout',
  },
  {
    path: '*',
    element: <NotFound />,
    children: [],
    header: 'Profile',
  },
]
