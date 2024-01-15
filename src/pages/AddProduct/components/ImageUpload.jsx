import { useState } from "react";
import ImageUploading from "react-images-uploading";
import picture from "../../../assets/icon/iconNormal/picture.svg";

function ImageUpload() {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="rounded-xl shadow-around w-full p-4 bg-white">
      <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
        Book's picture
      </p>
      <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
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
            {imageList.length === 0 ? <div
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
            </div> : imageList.map((image, index) => (
              <>
                <div key={index} className="max-h-[32.25rem] w-full flex items-start justify-center p-5 rounded-xl overflow-hidden border-black">
                  <img
                    className="rounded-lg h-full w-full object-contain"
                    src={image["data_url"]}
                    alt=""
                  />
  
                </div>
                <div className="w-full flex justify-center">
                  <button onClick={onImageRemoveAll} className="border border-[--primary-color] text-[--primary-color] px-10 py-2 mb-5 rounded-xl hover:text-white hover:bg-[--primary-color] font-extralight">Remove</button>
                </div>
              </>

            ))}

          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;

