import { useContext } from "react";
import useTitle from "../../CustomHooks/useTitle";
import banner from "../../assets/banner/banner.jpg"
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const AddToys = () => {
    useTitle("Add a Toys");
    const {user} = useContext(AuthContext);
    const handelAddToy = (event) =>{
        event.preventDefault();
        const from = event.target;
        const toyUrl = from.toyUrl.value;
        const toyName = from.toyName.value;
        const userName = from.userName.value;
        const userEmail = from.userEmail.value;
        const subCategory = from.subCategory.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const description = from.description.value;
        const toyData = {
            toyUrl,
            toyName,
            userName,
            userEmail,
            subCategory,
            price,
            rating,
            quantity,
            description
          };
          
        console.log(toyData);

        fetch('https://toy-monster-server-toufiqulislamtanmoy.vercel.app/toys',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(toyData)
        }).then(res => res.json()).then(data => {
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: 'Toy has been added in your list',
                showConfirmButton: false,
                timer: 1500
              })
            from.reset();
        })

    }
    return (
        <div className="hero min-h-screen"  style={{ backgroundImage: `url(${banner})` }}>
            <div className="my-20 card w-full max-w-[80%] shadow-2xl bg-base-100">
                <div className="card-body">
                <div className="divider text-2xl font-bold">Add Toy</div>
                    <form onSubmit={handelAddToy}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input type="text" placeholder="Toy URL" className="input input-bordered" name="toyUrl" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" placeholder="Toy Name" className="input input-bordered" name="toyName" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input  disabled={user ? true : false} type="text" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered" name="userName" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input  disabled={user ? true : false} defaultValue={user?.email} type="email" placeholder="User Email" className="input input-bordered" name="userEmail" />
                            </div>

                            <select className="mt-8 select w-full"  name="subCategory">
                                <option disabled selected>Sub Category Of Toy</option>
                                <option>Avenger</option>
                                <option>DC</option>
                                <option>Transformer</option>
                            </select>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="$ price" name="price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" className="input input-bordered" name="rating" min={1} max={5} />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input type="text" placeholder="Description" name="description" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Toy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToys;