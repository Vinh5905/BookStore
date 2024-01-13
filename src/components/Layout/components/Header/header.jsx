import { PiPhoneLight } from "react-icons/pi";
import { TfiFacebook } from "react-icons/tfi";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
function Header() {
    return (
        <div className="bg-HeaderColor">
            <nav className="flex justify-between items-center mx-auto w-[92%]">
                <div className="flex flex-row items-center font-semibold text-white">
                    <PiPhoneLight className="text-xs sm:text-sm md:text-5xl xl:text-5xl"/>
                    <p className="text-xs sm:text-sm md:text-5xl xl:text-5xl">+91 8374902234</p>
                </div>
                <div>
                    <ul className="flex items-center gap-6">
                        <li>
                            <a className="text-white font-semibold text-xs sm:text-sm md:text-5xl xl:text-5xl hover:text-sky-600" href="#"><TfiFacebook /></a>
                        </li>
                        <li>
                            <a className="text-white font-semibold text-xs sm:text-sm md:text-5xl xl:text-5xl hover:text-pink-400" href="#"><SlSocialInstagram /></a>
                        </li>
                        <li>
                            <a className="text-white font-semibold text-xs sm:text-sm md:text-5xl xl:text-5xl hover:text-sky-200" href="#"><TfiFacebook /></a>
                        </li>
                        <li>
                            <a className="text-white font-semibold text-xs sm:text-sm md:text-5xl xl:text-5xl hover:text-sky-600" href="#"><SlSocialTwitter /></a>
                        </li>
                        <li>
                            <a className="text-white font-semibold text-xs sm:text-sm md:text-5xl xl:text-5xl hover:text-sky-600" href="#"><TfiFacebook /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;