import {createBrowserRouter, Navigate} from "react-router-dom";
import {Routes} from '@/examples'
import App from "@/App";
import CardStreak from "@/pages/admin/CardStreak";
import CardExp from "@/pages/admin/CardExp";
import CardTime from "@/pages/admin/CardTime";
const routes = [
   {path:'/card',
   element: <CardStreak/>
  },

   {path:'/cardexp',
   element: <CardExp/>
  },
   {path:'/cardtime',
   element: <CardTime/>
  },
]

if (import.meta.env.VITE_ENABLE_EXAMPLES === "true") {
  routes.push(...Routes);
  routes.push({
    path:'/',
    element : <Navigate to="/examples" replace />
  });
} else {
    routes.push({
    path: "/*",
    element: <CardStreak />,
  });
}

  export const router = createBrowserRouter(routes);