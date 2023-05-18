import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import login from "../../assets/login/login.json"
import Lottie from "lottie-react"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../CustomHooks/useTitle";
const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    useTitle("Login")
    const navigate = useNavigate();

    const handelLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password)
        // Login With google 
        userLogin(email, password).then((LogedIn) => {
            // Signed in 
            const user = LogedIn.user;
            console.log("From Login route", user);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: `Welcome Back ${user.displayName}`,
            });
            navigate("/", { replace: true });
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Opps..!',
                    text: errorMessage,
                });
            });
    }


    const handelGoogleLogin = () => {
        console.log('inside google login')
        googleLogin().then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: `Welcome Back ${user.displayName}`,
            });
            navigate("/", { replace: true });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            Swal.fire({
                icon: 'error',
                title: 'Opps..!',
                text: errorMessage,
            });

        });
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse border border-red-600 rounded-2xl">
                <div className="w-2/3 ">
                    <Lottie animationData={login}></Lottie>
                </div>
                <div className="card-body w-full rounded-3xl ">
                    <div className="divider text-2xl font-bold">Login</div>
                    <form onSubmit={handelLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <p className="mt-3 space-x-2">Don't Have any account? <Link className="text-blue-600 underline" to="/signup">Sign up</Link></p>
                    </form>
                    <div className="divider text-2xl font-bold">Login With</div>
                    <div className="text-center">
                        <button onClick={handelGoogleLogin} className="text-3xl btn btn-wide bg-transparent hover:bg-orange-100"><FcGoogle /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;