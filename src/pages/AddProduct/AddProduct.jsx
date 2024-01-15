import ImageUpload from './components/ImageUpload';
import ProductInfo from './components/ProductInfo';

function AddProduct() {
    return (
        <div className="mx-32 my-10">
            <div className="grid grid-cols-12 gap-10">
                <div className='col-start-1 col-end-6'>
                    <ProductInfo></ProductInfo>
                </div>
                <div className='col-start-6 col-end-13'>
                    <ImageUpload></ImageUpload>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;