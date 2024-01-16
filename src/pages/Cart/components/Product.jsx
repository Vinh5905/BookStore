import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { IoIosRemove } from "react-icons/io";
import { Transition } from "@headlessui/react";

function Product( {data, onDelete, onIncrease, onDecrease} ) {
  // let [ isShow, setIsShowing ] = useState(true)

  return (
    // <Transition
    //   show={ isShow}
    //   enter="transition-opacity duration-200"
    //   enterFrom="opacity-0"
    //   enterTo="opacity-100"
    //   leave="transition-opacity duration-200 transform"
    //   leaveFrom="opacity-100 translate-x-0"
    //   leaveTo="opacity-0 -translate-x-24"
    // >
      <div className="flex h-36 relative rounded-xl mb-5 shadow-around">
        <div className="h-full aspect-square py-4 px-3 flex justify-center">
            <img className="shadow-md shadow-gray-300" src={data.src} alt="" />
        </div>

        <div className="flex-1 py-4 px-3  flex flex-col justify-between">
            <p className="text-lg font-medium pr-10 line-clamp-1">{data.name} <span className="font-light text-base italic text-black/50">by {data.author}</span></p>
            <div className="text-sm w-full">
                <span className="text-slate-500 font-light inline-block min-w-32 whitespace-nowrap">{(data.price).toLocaleString('vi')}VND x {data.count}</span>
                <span className="text-[--primary-color] ml-3 font-medium text-base inline-block">{(data.price * data.count).toLocaleString('vi')} VND</span>
            </div>
            <div className="flex items-center">
                
                <button onClick={() => {
                  if (data.count > 1) {
                    onDecrease()
                  }
                }} className={`h-8 w-8 border border-solid grid place-items-center rounded text-2xl ${data.count > 1 ? "text-[--primary-color] border-[--primary-color] cursor-pointer" : "text-[--gray-text] border-[--gray-text] cursor-not-allowed"}`}><IoIosRemove/></button>
                <p className="mx-3 text-[15px] inline-block min-w-6 text-center">{data.count}</p>
                <button onClick={onIncrease} className="text-[--primary-color] h-8 w-8 border border-solid border-[--primary-color] grid place-items-center rounded text-2xl"><IoIosAdd/></button>
            </div>
        </div>
        <div onClick={() => {
          // setIsShowing(false)
          onDelete()
        }} className="h-8 w-8 rounded-full absolute right-5 top-3 grid place-items-center text-3xl hover:bg-slate-200 cursor-pointer transition-all">
            <IoIosAdd className="rotate-45" />
        </div>
      </div>
    // </Transition>
  )
}


export default Product;