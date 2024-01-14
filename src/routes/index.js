import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Header from "../components/Layout/components/Header/header";
import Cart from "../pages/Cart/Cart";
import { Auth, Empty } from "../components/Layout";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/Header', component: Header},
    { path: '/cart', component: Cart, layout: Empty},
]

export { publicRoutes }