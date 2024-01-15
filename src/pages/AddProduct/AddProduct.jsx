import ImageUpload from './components/ImageUpload';
import ProductInfo from './components/ProductInfo';



function AddProduct() {
    return (
        <form className="mx-32 my-10">
            <div className="grid grid-cols-12 gap-10">
                <div className='col-start-1 col-end-6'>
                    <ProductInfo></ProductInfo>
                </div>
                <div className='col-start-6 col-end-13'>
                    <ImageUpload></ImageUpload>
                </div>
            </div>

            <div className='px-64 mt-20'>
                <button className="w-full border border-[--primary-color] text-[--primary-color] text-xl py-2 mb-5 rounded-2xl hover:text-white hover:bg-[--primary-color] font-extralight">Create product</button>
            </div>
           

        </form>
    )
}

export default AddProduct;