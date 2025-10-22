import {createBrowserRouter, Navigate} from "react-router-dom";
import {Routes} from '@/examples'
import App from "@/App";
import CardStreak from "@/pages/admin/CardStreak";
const routes = [
   {path:'/card',
   element: <CardStreak/>
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