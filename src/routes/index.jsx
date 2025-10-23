
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from '@/examples';
import CardStreak from '@/pages/admin/CardStreak';
import Sidebar from '@/pages/admin/Sidebar';
import Header from '@/pages/admin/Header';
import ChartAverage from '@/pages/admin/ChartAverage';
import ChartNhen from '@/pages/admin/ChartNhen';
import Ads from '@/pages/admin/Ads';
import Rank from '@/pages/admin/Rank';
import CardExp from "@/pages/admin/CardExp";
import CardTime from "@/pages/admin/CardTime";
import Dashboard from '@/pages/admin/Dashboard';

const routes = [
  { path: '/card', element: <CardStreak /> },
  {
    path: '/sidebar',
    element: <Sidebar />,
  },
  {
    path: '/header',
    element: <Header />,
  },
  {
    path: '/chartaverage',
    element: <ChartAverage />,
  },
  {
    path: '/chartnhen',
    element: <ChartNhen />,
  },
  {
    path: '/ads',
    element: <Ads />,
  },
  {
    path: '/rank',
    element: <Rank />,
  },
   {path:'/cardexp',
   element: <CardExp/>
  },
   {path:'/cardtime',
   element: <CardTime/>
  },
  {path:'/dashboard',
  element:<Dashboard/>
  }
];

if (import.meta.env.VITE_ENABLE_EXAMPLES === 'true') {
  routes.push(...Routes);
  routes.push({
    path: '/',
    element: <Navigate to="/examples" replace />,
  });
} else {
  routes.push({
    path: '/*',
    element: <CardStreak />,
  });
}

export const router = createBrowserRouter(routes);
