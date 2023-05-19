import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react"
import error404 from "../../assets/eror404/error404.json"
const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center space-y-5'>
            <div className='w-1/5'>
                <Lottie animationData={error404}></Lottie>
            </div>
            <h3 className='text-7xl font-bold'>{error?.message? error?.message : "404 Page Not Found"}</h3>
            <h3 className='text-5xl font-bold'>{status? status: "404!"}</h3>

            <Link className='text-3xl underline' to="/">Go To Home</Link>
        </div>
    );
};

export default Error;