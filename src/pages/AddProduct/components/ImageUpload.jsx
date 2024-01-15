import { useState } from "react";
import ImageUploading from "react-images-uploading";

function ImageUpload() {
  const [images, setImages] = useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className=" bg-red-100 py-28 px-28">
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
          // write your building UI
          <div
            onClick={onImageUpload}
            {...dragProps}
            className={`relative bg-green-100 w-full h-[25rem] border-2 border-dashed border-black/20 rounded-xl overflow-hidden bg-clip-padding`}
          >
            {images.length ? (
              imageList.map((image, index) => (
                <div key={index} className="image-item absolute inset-0 group/removeImg">
                  <img className="object-cover object-center w-full h-full" src={image["data_url"]} alt="" />
                  <div className="image-item__btn-wrapper bg-black/30 absolute inset-0 hidden place-items-center group-hover/removeImg:grid">
                    <button onClick={(e) => {
                        e.stopPropagation()
                        onImageRemove(index)
                    }} className="px-6 py-4 bg-slate-200 rounded-xl border border-solid border-black text-xl font-medium">Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center ">
                <p className="text-[--gray-text] font-medium text-[20px] text-center">
                  Drag&drop product <br /> image here
                </p>
                <div className="flex items-center text-gray-400 mt-8 mb-5">
                  <div className="w-10 h-px bg-gray-400"></div>
                  <span className="mx-3 font-extralight text-xs">OR</span>
                  <div className="w-10 h-px bg-gray-400"></div>
                </div>
                <button className="px-4 py-2 bg-slate-200 rounded-xl border border-solid border-black text-base font-medium">
                  Select file
                </button>
              </div>
            )}
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
