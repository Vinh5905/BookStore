import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ProductViewFilter from "../components/Layout/components/ProductViewFilter";
import Item from "../components/Layout/components/CardItem";
import Cart from "../pages/Cart/Cart";
import AddProduct from "../pages/AddProduct/AddProduct";
// import { Auth, OnlyHeader } from "../components/Layout";
import { Auth, OnlyHeader } from "../components/Layout";


const publicRoutes = [
    { path: '/', component: ProductViewFilter },
    { path: '/login', component: Login, layout: Auth },
    { path: '/register', component: Register, layout: Auth },
    { path: '/cart', component: Cart, layout: OnlyHeader},
    { path: '/add-product', component: AddProduct, layout: OnlyHeader },
]

export { publicRoutes }