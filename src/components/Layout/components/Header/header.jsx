import { PiPhoneLight } from "react-icons/pi";
import { TfiFacebook } from "react-icons/tfi";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { ImBlogger } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom"; 
import logoMain from  '../../../../assets/logo/logoMain.svg'

function Header() {
    return (
        <>
            <div className="bg-HeaderColor h-14">
                <div className="py-4">
                    <nav className="flex justify-between items-center mx-auto w-[92%]">
                        <div className="flex flex-row items-center font-semibold text-white">
                            <PiPhoneLight className="text-xs sm:text-sm md:text-sm xl:text-base"/>
                            <p className="text-xs sm:text-sm md:text-sm xl:text-base">+91 8374902234</p>
                        </div>
                        <div>
                            <ul className="flex items-center gap-6">
                                <li>
                                    <a className="text-white font-semibold text-xs sm:text-sm md:text-sm xl:text-base hover:text-sky-600" href="#"><TfiFacebook /></a>
                                </li>
                                <li>
                                    <a className="text-white font-semibold text-xs sm:text-sm md:text-sm xl:text-base hover:text-pink-400" href="#"><SlSocialInstagram /></a>
                                </li>
                                <li>
                                    <a className="text-white font-semibold text-xs sm:text-sm md:text-sm xl:text-base hover:text-sky-200" href="#"><FaLinkedinIn /></a>
                                </li>
                                <li>
                                    <a className="text-white font-semibold text-xs sm:text-sm md:text-sm xl:text-base hover:text-sky-500" href="#"><SlSocialTwitter /></a>
                                </li>
                                <li>
                                    <a className="text-white font-semibold text-xs sm:text-sm md:text-sm xl:text-base hover:text-yellow-400" href="#"><ImBlogger /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="h-[4.625rem] w-full flex justify-between items-center shadow-lg px-14 font-medium text-lg text-black/80">
                <div className="h-full flex items-center">
                    <img className="h-[2.5rem]" src={logoMain} alt="" />
                </div>
                <div className="font-medium text-base text-black/80 uppercase">
                    <Link to="/" className="py-4 px-10 hover:text-[--primary-color] transition-all cursor-pointer">Home</Link>
                    <Link to="/cart" className="py-4 px-10 hover:text-[--primary-color] transition-all cursor-pointer">Cart</Link>
                    <Link to="/add-product" className="py-4 px-10 hover:text-[--primary-color] transition-all cursor-pointer">Add product</Link>
                </div>

                <div>
                    <Link to="/login" className="py-4 hover:text-[--primary-color] transition-all cursor-pointer">Login &rarr;</Link>
                </div>
            </div>
        </>
    )
}

export default Header;