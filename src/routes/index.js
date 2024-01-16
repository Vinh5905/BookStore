import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Header from "../components/Layout/components/Header/header";
import ProductViewFilter from "../components/Layout/components/ProductViewFilter";
import Item from "../components/Layout/components/CardItem";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import { Auth, Empty } from "../components/Layout";


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/Header', component: Header },
    { path: '/ProductViewFilter', component: ProductViewFilter },
    { path: '/cart', component: Cart, layout: Empty},
    { path: '/add-product', component: AddProduct, layout: Empty },
]

export { publicRoutes }