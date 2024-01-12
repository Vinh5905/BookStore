

function Register() {
    return (
        <>
            <div className="w-full tracking-wider">
                <p className="text-3xl font-bold uppercase text-center text-[--primary-color]">Register</p>
            </div>

            <form action="" className="w-full">
                <div className="">
                    {/* username */}
                    <div>
                        <p className="font-medium text-base">Name</p>
                        <input type="email" name="" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="John Doe"/>
                    </div>
                    {/* email  */}
                    <div className="mt-5">
                        <p className="font-medium text-base">E-mail</p>
                        <input type="email" name="" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="abcxyz@gmail.com"/>
                    </div>
                    {/* password  */}
                    <div className="mt-5">
                        <p className="font-medium text-base">Password</p>
                        <input type="password" name="" id="" className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50" placeholder="Enter password"/>
                    </div>
                    
                </div>

                <input type="submit" value="Register" className="h-10 w-full bg-[--primary-color] rounded-sm text-white mb-3 mt-12"/>
                <div className="h-10 w-full grid place-items-center rounded-sm border-solid border border-indigo-500 text-indigo-500">Login</div>
            </form>
        </>
    )
}

export default Register;