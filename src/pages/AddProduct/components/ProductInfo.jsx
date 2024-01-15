import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorField from "../../components/ErrorField";

function ProductInfo() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit} className="h-screen bg-blue-100 grid gap-8 w-full">
            <div className="rounded-xl shadow-around w-full">
                <p>Name</p>
                <input type="text" {...register("Name", {require: "Not empty"})}/>
                <ErrorMessage errors={errors} name="Name" render={({message}) => <ErrorField>{message}</ErrorField>}></ErrorMessage>
            </div>
        </form>
    )
}

export default ProductInfo;