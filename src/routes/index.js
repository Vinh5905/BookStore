import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import { Auth } from "../components/Layout";
import Header from "../components/Layout/components/Header/header";
import ProductViewFilter from "../components/Layout/components/ProductViewFilter";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/Header', component: Header },
    { path: '/ProductViewFilter', component: ProductViewFilter }
]

export { publicRoutes }