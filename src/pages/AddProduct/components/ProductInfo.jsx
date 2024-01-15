import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorField from "../../components/ErrorField";

function ProductInfo() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="rounded-xl shadow-around w-full p-4 bg-white">
                <p className="font-medium text-base mb-2 text-black/80 tracking-wide">Name</p>
                <div className="relative">
                    <input type="text" {...register("Name", {require: "Not empty"})} className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]" placeholder="Enter book's name"/>
                    <ErrorMessage errors={errors} name="Name" render={({message}) => <ErrorField>{message}</ErrorField>}/>
                </div>
            </div>

            <div className="rounded-xl shadow-around w-full p-4 bg-white">
                <p className="font-medium text-base mb-2 text-black/80 tracking-wide">Price</p>
                <div className="relative">
                    <input type="text" {...register("Price", {require: "Not empty"})} className="w-full pl-4 py-3 pr-24 placeholder-black/40 font-light bg-orange-50 rounded-2xl focus:outline-[--primary-color]" placeholder="Enter book's price"/>
                    <div className="absolute right-0 inset-y-2 grid place-items-center px-5 border-l border-black/20 font-medium text-[--primary-color]">VND</div>
                    <ErrorMessage errors={errors} name="Price" render={({message}) => <ErrorField>{message}</ErrorField>}/>
                </div>
            </div>

            <div className="rounded-xl shadow-around w-full p-4 bg-white">
                <p className="font-medium text-base mb-2 text-black/80 tracking-wide">Describe</p>
                <div className="relative">
                    {/* <input type="text" {...register("Name", {require: "Not empty"})} className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl" placeholder="Enter book's name"/> */}
                    <textarea name="" id="" className="w-full px-4 py-3 placeholder-black/40 font-light bg-orange-50 rounded-2xl resize-y min-h-52 focus:outline-[--primary-color]" placeholder="Describe about your book"></textarea>
                </div>
            </div>


        </form>
    )
}

export default ProductInfo;