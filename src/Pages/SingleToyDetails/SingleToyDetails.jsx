import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import useTitle from "../../CustomHooks/useTitle";
import banner from "../../assets/banner/banner.jpg"
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const SingleToyDetails = () => {
    useTitle("Update Toy Details");
    const singleToyDitals = useLoaderData();
    const { _id, rating, description, price, quantity, toyUrl, toyName, subCategory } = singleToyDitals;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handelUpdate = (event) => {
        event.preventDefault();
        const from = event.target;
        const price = from.price.value;
        const quantity = from.quantity.value;
        const description = from.description.value;

        const newData = {
            price,
            quantity,
            description
        };

        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newData)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: 'success',
                    title: 'Data Has Ben Updated Successfully',
                    text: "Well Done",
                });
                navigate("/mytoys",{replace:true})
            }
        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="my-20 card w-full max-w-[80%] shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="divider text-2xl font-bold">Update Details</div>
                    <form onSubmit={handelUpdate}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input defaultValue={toyUrl} disabled={toyUrl ? true : false} type="text" placeholder="Toy URL" className="input input-bordered" name="toyUrl" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input disabled={toyName ? true : false} type="text" placeholder="Toy Name" className="input input-bordered" name="toyName" defaultValue={toyName} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input disabled={user ? true : false} type="text" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" name="userName" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input disabled={user ? true : false} defaultValue={user?.email} type="email" placeholder="User Email" className="input input-bordered" name="userEmail" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <input defaultValue={subCategory} disabled={subCategory ? true : false} type="text" name="subCategory" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={price} type="text" placeholder="$ price" name="price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input defaultValue={rating} disabled={rating ? true : false} type="text" className="input input-bordered" name="rating" min={1} max={5} />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input defaultValue={quantity} type="text" placeholder="Quantity" name="quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input defaultValue={description} type="text" placeholder="Description" name="description" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;