import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import login from "../../assets/login/login.json"
import Lottie from "lottie-react"
const SignUp = () => {
    const handelSignUp = (event) =>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photoUrl.value;
        const password = from.password.value;
        console.log(name,email,photoUrl,password)

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse border border-red-600 rounded-2xl">
                <div className="w-2/3 ">
                    <Lottie animationData={login}></Lottie>
                </div>
                <div className="card-body w-full rounded-3xl ">
                    <div className="divider text-2xl font-bold">Sign Up</div>
                    <form onSubmit={handelSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                        <p className="mt-3 space-x-2">Already Have an account? <Link className="text-blue-600 underline" to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;