import { PiPhoneLight } from "react-icons/pi";
import { TfiFacebook } from "react-icons/tfi";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { ImBlogger } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
function Header() {
    return (
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
            <div className="w-full bg-gradient-to-r from-Linear1 to-Linear2 h-16 flex justify-center items-center">
                <p className="text-center items-center text-HeaderColor font-medium">HOME/PRODUCT</p>
            </div>
        </div>
    )
}

export default Header;