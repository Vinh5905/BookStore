import { useState } from "react";
import { set } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";    
import { FiMinus } from "react-icons/fi";
function ProductViewFilter() {
    const [isOpen1, SetisOpen1] = useState(false);
    const [isOpen2, SetisOpen2] = useState(false);
    const [isOpen3, SetisOpen3] = useState(false);
    const [isOpen4, SetisOpen4] = useState(false);
    const [isOpen5, SetisOpen5] = useState(false);
    const [isOpen6, SetisOpen6] = useState(false);
    return (
        <div className="my-3">
            <div className="flex flex-row items-center mx-auto w-[92%]">
                <div className="flex flex-col mr-10">
                    <div className="relative inline-block text-left">
                        <div className="relative flex flex-col">
                            <button type="button" onClick={() => SetisOpen1(!isOpen1)} className="transition-all w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Price
                                {!isOpen1 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                            {isOpen1 && (
                                <div className="w-40 py-3 my-2">
                                    <div className="flex flex-row justify-between items-center">
                                            <label htmlFor="from" className="text-TextColor1 font-semibold text-sm"><FaDollarSign /></label>
                                            <input type="text" name="from" id="from"  className="border-2 font-semibold w-12 focus:outline-none focus:ring-1 focus:ring-sky-500 text-sm"></input>
                                            <p className="font-semibold text-sm mx-2">To</p>
                                            <label htmlFor="to" className="text-TextColor1 font-semibold text-sm"><FaDollarSign /></label>
                                            <input type="to" name="to" id="to"  className=" border-2 font-semibold w-12 text-sm"></input>
                                    </div>
                                    <button type="submit" className="w-40 mt-4 py-2 font-semibold text-sm text-white bg-HeaderColor hover:bg-sky-700 transition-all">Filter</button>
                                </div>
                            )}
                        </div>
                        <div>
                            <button type="button" onClick={()=>{(SetisOpen2(!isOpen2))}} className="w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Product type
                                {!isOpen2 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                            {/* {isOpen && (
                                <div className="w-36 py-3">
                                    <div className="flex flex-row justify-between">
                                            <label htmlFor="from" className="text-TextColor1 font-semibold text-sm"><FaDollarSign /></label>
                                            <input type="text" name="from" id="from"  className="border-2 font-semibold text-sm"></input>
                                            <p className="font-semibold text-sm">To</p>
                                            <label htmlFor="to" className="text-TextColor1 font-semibold text-sm"><FaDollarSign /></label>
                                            <input type="to" name="to" id="to"  className=" border-2 font-semibold text-sm"></input>
                                    </div>
                                </div>
                            )} */}
                        </div>
                        <div>
                            <button type="button" onClick={()=>SetisOpen3(!isOpen3)} className="w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Availability
                                 {!isOpen3 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={()=>SetisOpen4(!isOpen4)} className="w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Brand
                                 {!isOpen4 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={()=>SetisOpen5(!isOpen5)} className="w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Color
                                 {!isOpen5 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={()=>SetisOpen6(!isOpen6)} className="w-40 py-3 border-b-2 border-b-indigo-500 flex flex-row items-center justify-between bg-white text-sm font-semibold text-TextColor1 shadow-sm hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Material
                                 {!isOpen6 ? (
                                    <FiMinus  className="text-TextColor1"/>
                                ) : (
                                    <IoIosArrowDown  className="text-TextColor1"/>  
                                )
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-max">
                    <div>
                        hello
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductViewFilter;