import InformationView from "../InformationView";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
function Item ({ src, name, quantity, price, count }){
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
    return (
        <div className="relative flex flex-col items-center mb-14">
            <div className="relative w-60 h-72 p-9 shadow-xl border group/parent transition-all">
                <img src={src}
                    className=" object-cover w-full h-full transition-all group-hover/parent:scale-75 group-hover/parent:opacity-10"></img>
                <button
                        type="button"
                        onClick={openModal}
                        className="transition-all hover:bg-violet-500 invisible group-hover/parent:visible translate-y-10 z-10 group-hover/parent:-translate-y-20 absolute w-[80%] -ml-3 p-2 bg-TextColor3 text-sm text-white font-normal tracking-widest"
                        >
                        ADD TO CART
                        </button>
                

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="max-w-4xl max-h-max flex flex-col transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg flex flex-row items-center font-medium leading-6 text-gray-900"
                                    >
                                    <IoIosArrowBack onClick={closeModal} className='cursor-pointer items-center hover:scale-125 transition-all'/>
                                    Book Details
                                </Dialog.Title>
                                <div className="mt-2 max-h-fit max-w-4xl relative flex flex-row flex-shrink">
                                    <div className='w-60 mr-6 relative h-72 p-5 shadow-xl border bg-slate-300'>
                                        <img src={src}
                                            className='object-cover w-full h-full'></img>                  
                                    </div>
                                    <div className='flex flex-col flex-1'>
                                                        <p className='font-semibold text-xl text-black'>{name}</p>
                                        <p className='font-semibold text-base text-TextColor2'>Frank Herbert</p>
                                        <p className='font-semibold text-base text-black my-2'>Summary</p>
                                        <p className='font-normal text-gray-400 text-sm text-justify'>Dune is set in the distant future amidst a feudal interstellar society in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis. While the planet is an inhospitable and sparsely populated desert wasteland, it is the only source of melange, or "spice", a drug that extends life and enhances mental abilities. Melange is also necessary for space navigation, which requires a kind of multidimensional awareness and foresight that only the drug provides. As melange can only be produced on Arrakis, control of the planet is a coveted and dangerous undertaking. </p>                  
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                    type="button"
                                    className="transition-all w-[25%] hover:bg-violet-500 p-2 bg-TextColor3 text-sm text-white font-normal tracking-widest"
                                    onClick={closeModal}
                                    >
                                        <div className='flex flex-row justify-between'>
                                                            <p className=''>{price}$</p>
                                                            <p>Buy Now</p>
                                        </div>
                                    </button>
                                </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            </div>
                        </div>
                        </Dialog>
                    </Transition>
                
            </div>
            <div className="flex flex-col items-center z-10 w-full bg-white">
                <p className="text-base text-HeaderColor font-semibold my-2 w-44 text-center line-clamp-1">{name}</p>
                <div className="flex flex-row items-center mb-2">
                    <p className="text-sm text-TextColor2 font-normal">Quantity: </p>
                    <p className="text-sm text-TextColor2 font-normal ml-2">{quantity}</p>
                </div>
                <p className="text-xl text-TextColor3 font-bold">${price}</p>
            </div>
        </div>
    )
}
export default Item;