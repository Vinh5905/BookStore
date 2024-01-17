import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
import { Auth, OnlyHeader } from "../components/Layout";
import ListProductView from "../pages/ListProductView";


const publicRoutes = [
    { path: '/', component: ListProductView },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/cart', component: Cart, layout: OnlyHeader},
    { path: '/add-product', component: AddProduct, layout: OnlyHeader },
]

export { publicRoutes }