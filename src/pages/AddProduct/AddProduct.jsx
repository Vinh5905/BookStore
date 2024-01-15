import ImageUpload from './components/ImageUpload';
import ProductInfo from './components/ProductInfo';

function AddProduct() {
    return (
        <div className="mx-48 my-10">
            <div className="bg-white shadow-around rounded-xl grid grid-cols-2 overflow-hidden">
                <ImageUpload></ImageUpload>
                <ProductInfo></ProductInfo>
            </div>
        </div>
    )
}

export default AddProduct;