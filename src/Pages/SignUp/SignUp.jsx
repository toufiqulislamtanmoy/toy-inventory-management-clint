import { Link } from "react-router-dom";
import login from "../../assets/login/login.json"
import Lottie from "lottie-react"
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
const SignUp = () => {
    const { userSignIn ,userProfileUpdate} = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('');
    const handelSignUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photoUrl.value;
        const password = from.password.value;
        console.log(name, email, photoUrl, password)

        const validation = validatePassword(password);

        if (validation.isValid) {
            userSignIn(email, password).then((signInUser) => {
                const user = signInUser.user;
                console.log(user)
                userProfileUpdate(name, photoUrl).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Account is Created Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                    from.reset();

                }).catch((error) => {
                    console.log(error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text:error.message,
                      })
                });

            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `${errorMessage} ${errorCode}`,
                      })
                      console.log(errorMessage)
                });

            setErrorMsg('');
            
        } else {
            setErrorMsg(validation.errorMessage);
        }




    }

    const validatePassword = (password) => {
        const requirements = [
            { regex: /^(?=.*[a-z])/, message: "at least one lowercase letter" },
            { regex: /^(?=.*[A-Z])/, message: "at least one uppercase letter" },
            { regex: /^(?=.*\d)/, message: "at least one digit" },
            { regex: /^(?=.*[@$!%*?&])/, message: "at least one symbol (@$!%*?&)" },
            { regex: /^.{6,}$/, message: "at least six characters" },
        ];

        const errorMessage = requirements
            .filter((requirement) => !requirement.regex.test(password))
            .map((requirement) => requirement.message)
            .join(", ");

        if (errorMessage) {
            return { isValid: false, errorMessage: `Password must contain ${errorMessage}.` };
        } else {
            return { isValid: true };
        }
    };

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
                        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
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