import { createBrowserRouter, RouterProvider } from 'react-router'
import { lazy, Suspense } from 'react'
import { MainLayout } from './layouts/MainLayout'

const Landing = lazy(() => import('../pages/Landing'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Chat = lazy(() => import('../pages/Chat'))
const Vocabulary = lazy(() => import('../pages/Vocabulary'))
const History = lazy(() => import('../pages/History'))
const Statistics = lazy(() => import('../pages/Statistics'))
const Settings = lazy(() => import('../pages/Settings'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/chat/:conversationId?',
        element: <Chat />
      },
      {
        path: '/vocabulary',
        element: <Vocabulary />
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/settings',
        element: <Settings />
      }
    ]
  }
])

export function App() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center bg-surface-950">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  )
}
