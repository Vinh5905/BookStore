import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorField from "../../components/ErrorField";
import { Listbox } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const bookCategory = [
  { id: 1, name: "Mystery", unavailable: false },
  { id: 2, name: "Historical", unavailable: false },
  { id: 3, name: "Science", unavailable: false },
  { id: 4, name: "Comedy", unavailable: false },
];

function ProductInfo() {
  let [selectedPerson, setSelectedPerson] = useState({
    id: 0,
    name: "Choose kind of book",
    unavailable: true,
  });
  let [prInfo, setPrInfo] = useState({
    src: "",
    description: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPrInfo({
      ...prInfo,
      ...data,
    });
  };

  console.log(prInfo)

  return (
    <div onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
      <div className="rounded-xl shadow-around w-full p-4 bg-white">
        <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
          Name
        </p>
        <div className="relative">
          <input
            type="text"
            {...register("Name", { require: "Not empty" })}
            className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
            placeholder="Enter book's name"
          />
          <ErrorMessage
            errors={errors}
            name="Name"
            render={({ message }) => <ErrorField>{message}</ErrorField>}
          />
        </div>
      </div>

      <div className="rounded-xl shadow-around w-full p-4 bg-white">
        <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
          Author
        </p>
        <div className="relative">
          <input
            type="text"
            {...register("Author", { require: "Not empty" })}
            className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
            placeholder="Enter book's author"
          />
          <ErrorMessage
            errors={errors}
            name="Author"
            render={({ message }) => <ErrorField>{message}</ErrorField>}
          />
        </div>
      </div>

      <div className="rounded-xl shadow-around w-full p-4 bg-white">
        <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
          Kind of book
        </p>
        <div className="relative">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color] text-left flex items-center justify-between">
              {selectedPerson.name}
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Listbox.Button>
            <Listbox.Options className="absolute w-full z-10 top-14 rounded-xl overflow-hidden shadow-around">
              {bookCategory.map((kind) => (
                <Listbox.Option
                  key={kind.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-orange-100 text-amber-900"
                        : "text-gray-900 bg-white"
                    }`
                  }
                  value={kind}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {kind.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
          <ErrorMessage
            errors={errors}
            name="Author"
            render={({ message }) => <ErrorField>{message}</ErrorField>}
          />
        </div>
      </div>

      <div className="rounded-xl shadow-around w-full p-4 bg-white">
        <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
          Price
        </p>
        <div className="relative">
          <input
            type="text"
            {...register("Price", { require: "Not empty" })}
            className="w-full pl-4 py-3 pr-24 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
            placeholder="Enter book's price"
          />
          <div className="absolute right-0 inset-y-2 grid place-items-center px-5 border-l border-black/20 font-medium text-[--primary-color]">
            VND
          </div>
          <ErrorMessage
            errors={errors}
            name="Price"
            render={({ message }) => <ErrorField>{message}</ErrorField>}
          />
        </div>
      </div>

      <div className="rounded-xl shadow-around w-full p-4 bg-white">
        <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
          Describe
        </p>
        <div className="relative">
          <textarea
            name=""
            id=""
            className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl resize-y min-h-52 focus:outline-[--primary-color]"
            placeholder="Describe about your book"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
