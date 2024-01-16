import ErrorField from "../components/ErrorField";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import { login } from "../../apis/UserAPI";
// import { useHistory } from "react-router-dom";

function Register() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const history = useHistory();
//   const mutation = useMutation({
//     mutationFn: login,
//     onSuccess: () => {
//       history.push("/");
//     },
//     onError: () => {},
//   });
    
//   const onSubmit = (data) => {
//     mutate(...data);
//   };

  return (
    <>
      <div className="w-full tracking-wider">
        <p className="text-3xl font-bold uppercase text-center text-[--primary-color]">
          Register
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full">
        <div className="">
          {/* username */}
          <div>
            <p className="font-medium text-base">Name</p>
            <div className="relative">
              <input
                {...register("name", { required: "Please enter your name!!" })}
                type="text"
                id=""
                className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50"
                placeholder="John Doe"
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <ErrorField>{message}</ErrorField>}
              />
            </div>
          </div>
          {/* email  */}
          <div className="mt-5">
            <p className="font-medium text-base">E-mail</p>
            <div className="relative">
              <input
                {...register("email", {
                  required: "Please enter your email!!",
                })}
                type="email"
                id=""
                className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50"
                placeholder="abcxyz@gmail.com"
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <ErrorField>{message}</ErrorField>}
              />
            </div>
          </div>
          {/* password  */}
          <div className="mt-5">
            <p className="font-medium text-base">Password</p>
            <div className="relative">
              <input
                {...register("password", {
                  required: "Please enter your password!!",
                })}
                type="password"
                id=""
                className="w-full p-2.5 outline-none rounded-sm mt-1 font-light placeholder-slate-400 bg-indigo-50"
                placeholder="Enter password"
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <ErrorField>{message}</ErrorField>}
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Register"
          className="h-10 w-full bg-[--primary-color] rounded-sm text-white mb-3 mt-12 cursor-pointer"
        />
        <Link
          to="/login"
          className="h-10 w-full grid place-items-center rounded-sm border-solid border border-indigo-500 text-indigo-500"
        >
          Login
        </Link>
      </form>
    </>
  );
}

export default Register;
