import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import { Auth } from "../components/Layout";
import Header from "../components/Layout/components/Header/header";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/Header', component: Header},
]

export { publicRoutes }