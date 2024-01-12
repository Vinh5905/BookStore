import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

export default function DefaultLayout( {children} ) {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
}