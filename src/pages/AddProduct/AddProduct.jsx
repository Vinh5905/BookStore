import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorField from "../components/ErrorField";
import { Listbox } from "@headlessui/react";
import { useState, Fragment, useRef } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ImageUploading from "react-images-uploading";
import picture from "../../assets/icon/iconNormal/picture.svg";
import { uploadProfile } from "../../apis/UserAPI"

const bookKinds = ["Mystery", "Historic", "Science", "Novel", "Reference book", "Textbook", "Comic", "Dictionary", "Fairy tale"]

const bookCategory = bookKinds.map((bookKind, index) => {
  return { id: index + 1, name: bookKind, unavailable: false }
})

function AddProduct() {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [selectedKind, setSelectedKind] = useState({
    id: 0,
    name: "Choose kind of book",
    unavailable: true,
  });

  const onSubmit = (d) => {
    d.kind = selectedKind.id === 0 ? "" : selectedKind.name
    // data.src = images.length === 0 ? "" : images[0].data_url
    uploadProfile(images[0].file).then(res => {
      const newData = res.data
      d.src = newData
      console.log(d.src)
    })
    console.log(d);
  };

  return (
    <form className="mx-32 my-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-start-1 col-end-6">
          <div className="flex flex-col gap-6 w-full">
            <div className="rounded-xl shadow-around w-full p-4 bg-white">
              <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
                Name
              </p>
              <div className="relative">
                <input
                  type="text"
                  {...register("name", { required: "Do not leave black" })}
                  className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
                  placeholder="Enter book's name"
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }) => <ErrorField direc="bottom-full">{message}</ErrorField>}
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
                  {...register("author", { required: "Do not leave black" })}
                  className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
                  placeholder="Enter book's author"
                />
                <ErrorMessage
                  errors={errors}
                  name="author"
                  render={({ message }) => <ErrorField direc="bottom-full">{message}</ErrorField>}
                />
              </div>
            </div>

            <div className="rounded-xl shadow-around w-full p-4 bg-white">
              <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
                Kind of book
              </p>
              <div className="relative">
                <Listbox value={selectedKind} onChange={setSelectedKind}>
                  <Listbox.Button className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color] text-left flex items-center justify-between">
                    {selectedKind.name}
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Listbox.Button>
                  <Listbox.Options className="absolute w-full z-10 top-14 rounded-xl shadow-around max-h-64 overflow-auto">
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
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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
                  render={({ message }) => <ErrorField direc="bottom-full">{message}</ErrorField>}
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
                  {...register("price", { required: "Do not leave black" })}
                  className="w-full pl-4 py-3 pr-24 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]"
                  placeholder="Enter book's price"
                />
                <div className="absolute right-0 inset-y-2 grid place-items-center px-5 border-l border-black/20 font-medium text-[--primary-color]">
                  VND
                </div>
                <ErrorMessage
                  errors={errors}
                  name="price"
                  render={({ message }) => <ErrorField direc="bottom-full">{message}</ErrorField>}
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
                  {...register("describe")}
                  className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl resize-y min-h-52 focus:outline-[--primary-color]"
                  placeholder="Describe about your book"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-13">
          <div className="rounded-xl shadow-around w-full p-4 bg-white">
            <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
              Book's picture
            </p>
            <ImageUploading
              value={images}
              onChange={onChange}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className="w-full grid grid-cols-1 justify-center">
                  {imageList.length === 0 ? (
                    <div
                      onClick={onImageUpload}
                      {...dragProps}
                      className="w-full bg-orange-50 h-40 border-2 border-[--primary-color] border-dashed rounded-2xl flex items-center justify-center hover:bg-orange-200/30 cursor-pointer"
                    >
                      <div className="flex flex-col items-center">
                        <img src={picture} alt="" className="w-16 opacity-50" />
                        <p className="font-light text-black/40">
                          Drag & drop or choose from file
                        </p>
                      </div>
                    </div>
                  ) : (
                    imageList.map((image, index) => (
                      <>
                        <div
                          key={index}
                          className="max-h-[32.25rem] w-full flex items-start justify-center p-5 rounded-xl overflow-hidden border-black"
                        >
                          <img
                            className="rounded-lg h-full w-full object-contain"
                            src={image["data_url"]}
                            alt=""
                          />
                        </div>
                        <div className="w-full flex justify-center">
                          <button
                            onClick={onImageRemoveAll}
                            className="border border-[--primary-color] text-[--primary-color] px-10 py-2 mb-5 rounded-xl hover:text-white hover:bg-[--primary-color] font-extralight"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    ))
                  )}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
      </div>

      <div className="px-64 mt-20">
        <input
          type="submit"
          value="Create product"
          className="transition-all w-full border border-[--primary-color] text-[--primary-color] text-xl py-2 mb-5 rounded-2xl hover:text-white hover:bg-[--primary-color] font-extralight cursor-pointer"
        />
      </div>
    </form>
  );
}

export default AddProduct;
