import { useState } from "react";
import ImageUploading from "react-images-uploading";
import picture from "../../../assets/icon/iconNormal/picture.svg";

function ImageUpload() {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="rounded-xl shadow-around w-full p-4 bg-white">
      <p className="font-medium text-base mb-2 text-black/80 tracking-wide">
        Book's picture
      </p>
      <ImageUploading
        value={images}
        onChange={onChange}
        // maxNumber={maxNumber}
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
          <div className="w-full">
            <div onClick={onImageUpload} {...dragProps} className="bg-orange-50 h-40 border-2 border-[--primary-color] border-dashed rounded-2xl flex items-center justify-center hover:bg-orange-200/30 cursor-pointer">
              <div className="flex flex-col items-center">
                <img src={picture} alt="" className="w-16 opacity-50" />
                <p className="font-light text-black/40">
                  Drag & drop or choose from file
                </p>
              </div>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImageUpload;

{
  /* <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
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
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div> */
}
