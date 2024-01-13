import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import { Auth } from "../components/Layout";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth},
]

export { publicRoutes }