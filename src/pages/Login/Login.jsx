

function Login() {
    return (
        <>
            <div className="w-full tracking-wider">
                <p className="text-slate-500 text-base">Welcome back!</p>
                <p className="text-xl font-medium">Login to your account</p>
            </div>

            <form action="" className="w-full">
                <div className="">
                    {/* email  */}
                    <div>
                        <p className="font-medium text-base">E-mail</p>
                        <input type="email" name="" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="abcxyz@gmail.com"/>
                    </div>
                    {/* password  */}
                    <div className="mt-5">
                        <p className="font-medium text-base">Password</p>
                        <input type="password" name="" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="Enter password"/>
                    </div>
                    {/* remember  */}
                    <div className="mt-2 text-sm inline-flex justify-center ml-auto text-[--primary-color] hover:underline underline-offset-">
                        <input type="checkbox" name="" id="remember-me" className="mr-1.5 rounded-none accent-[--primary-color]"/>
                        <label for="remember-me">Remember me</label>
                    </div>
                </div>

                <input type="submit" value="Login" className="h-10 w-full bg-[--primary-color] rounded-sm text-white mb-3 mt-12"/>
                <div className="h-10 w-full grid place-items-center rounded-sm border-solid border border-indigo-500 text-indigo-500">Register</div>
            </form>
        </>
    )
}

export default Login;