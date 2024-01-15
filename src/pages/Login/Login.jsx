import ErrorField from "../components/ErrorField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addNewUser } from "../../apis/UserAPI";


function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (d) => {
        useEffect(() => {
            addNewUser(d).then((res) => {
                let data = res.data;
                console.log(data)
            });
        }, []);
    };

    

    return (
        <>
            <div className="w-full tracking-wider">
                <p className="text-slate-500 text-base">Welcome back!</p>
                <p className="text-xl font-medium text-[--primary-color]">Login to your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full">
                <div className="">
                    {/* email  */}
                    <div className="mt-5">
                        <p className="font-medium text-base">E-mail</p>
                        <div className="relative">
                            <input {...register("Email", {required: "Please enter your email!!"})} type="email" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="abcxyz@gmail.com"/>
                            <ErrorMessage errors={errors} name="Email" render={({ message }) => <ErrorField>{message}</ErrorField>}/>
                        </div>
                       
                    </div>
                    {/* password  */}
                    <div className="mt-5">
                        <p className="font-medium text-base">Password</p>
                        <div className="relative">
                            <input {...register("Password", {required: "Please enter your password!!"})} type="password" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="Enter password"/>
                            <ErrorMessage errors={errors} name="Password" render={({ message }) => <ErrorField>{message}</ErrorField>}/>
                        </div>
                       
                    </div>
                    {/* remember  */}
                    <div className="mt-2 text-sm inline-flex justify-center ml-auto text-[--primary-color] hover:underline underline-offset-">
                        <input {...register("Remember")} type="checkbox" id="remember-me" className="mr-1.5 rounded-none accent-[--primary-color]"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                </div>

                <input type="submit" value="Login" className="h-10 w-full bg-[--primary-color] rounded-sm text-white mb-3 mt-12 cursor-pointer"/>
                <Link to="/register" className="h-10 w-full grid place-items-center rounded-sm border-solid border border-indigo-500 text-indigo-500">Register</Link>
            </form>
        </>
    )
}

export default Login;