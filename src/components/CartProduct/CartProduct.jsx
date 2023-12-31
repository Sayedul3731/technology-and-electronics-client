/* eslint-disable react/prop-types */
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const CartProduct = ({ cart, carts, setCarts }) => {
    const { _id, photo, name, brand, price, type, rating } = cart;

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm');
                fetch(`https://technology-and-electronics-server-fd923tlg8-ate-yours-projects.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cart => cart._id !== _id)
                            setCarts(remaining)
                        }
                    })
            }
        })


    }
    return (
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative h-[400px] lg:h-[500px] mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img className="w-full h-full"
                    src={photo}
                    alt="ui/ux review check"
                />
                <div className="inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h5 className="block  text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <p className="flex items-center gap-1.5  text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                            <path

                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"

                            ></path>
                        </svg>
                        {rating}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="block  text-base antialiased font-light leading-relaxed text-gray-700 ">
                        {brand}
                    </p>
                    <p className="block  text-base antialiased font-light leading-relaxed text-gray-700 ">
                        {type}
                    </p>
                </div>
                <p className="block mt-2  text-base antialiased font-light leading-relaxed text-gray-700 font-medium">
                    Price: <span className="font-semibold">{price}</span>$
                </p>
            </div>
            <div className="px-4 pb-4">
                <NavLink>
                    <button onClick={() => handleDelete(_id)}
                        className="block select-none w-full border rounded-sm bg-green-400 lg:bg-sky-400 py-3.5 px-7 text-center align-middle  text-sm font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Delete
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    cart: PropTypes.object
}
export default CartProduct;