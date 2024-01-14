import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

function Modal( {total, products} ) {
  let [isOpen, setIsOpen] = useState(false);

  const handleBuy = () => {
    alert("Buy successful!!");
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="rounded-xl bg-[--primary-color] text-white  h-12 shadow-xl uppercase font-semibold w-full"
      >
        Review and Pay
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex justify-center items-center"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-[37rem] max-h-[37rem] bg-white rounded-xl p-8 flex relative">
              <div className="overflow-auto flex flex-col w-full">
                <p className="uppercase font-semibold text-[--primary-color] text-2xl text-center pb-8 pt-2">
                  Payment confirmation
                </p>
                <div className="flex-1 overflow-auto">
                  {total === 0 ? (
                    <EmptyCart />
                  ) : (
                    <>
                      <p className="mb-2 text-[--gray-text] italic text-sm">
                        Selected products:
                      </p>

                      <div className="flex flex-col">
                        <div>
                          {products.map((product, index) => {
                            return (
                              <ProductPay key={index} chosenProduct={product} />
                            );
                          })}
                        </div>
                      </div>

                      <div className="text-xl text-[--primary-color] font-semibold flex justify-between my-5">
                        <span className="capitalize">total:</span>
                        <span className="">
                          {total.toLocaleString("vi")} VND
                        </span>
                      </div>
                      <Link
                        to="/"
                        className="rounded-xl bg-[--primary-color] text-white grid place-items-center h-12 w-full shadow-xl uppercase font-semibold"
                        onClick={handleBuy}
                      >
                        Buy
                      </Link>
                    </>
                  )}
                </div>
              </div>

              <div
                onClick={() => {
                  setIsOpen(false);
                }}
                className="h-10 w-10 rounded-full absolute right-7 top-5 grid place-items-center text-4xl hover:bg-slate-200 cursor-pointer"
              >
                <IoIosAdd className="rotate-45" />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function ProductPay({ chosenProduct }) {
  return (
    <div className="w-full shadow-aroundSmall flex justify-between py-1 px-2 rounded-lg my-2">
      <div className="flex flex-1 pr-7 items-center">
        <div className="h-12 aspect-square p-1 flex justify-center">
          <img className="object-contain" src={chosenProduct.src} alt="" />
        </div>
        <p className="font-medium whitespace-normal text-[15px] text-black/70 pl-2 line-clamp-2	">
          {chosenProduct.name}
        </p>
      </div>

      <div className="w-20 relative grid place-items-center">
        <div className="absolute w-px h-8 bg-slate-400 left-0"></div>
        <span className="text-slate-500 font-light">
          x {chosenProduct.count}
        </span>
      </div>
    </div>
  );
}

export default Modal;
