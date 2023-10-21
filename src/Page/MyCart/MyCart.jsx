import { useLoaderData } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useState,useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyCart = () => {

    const loadedCarts = useLoaderData()

    const {user} = useContext(AuthContext)

    const filteredProducts = loadedCarts.filter(loadedCart => loadedCart.email === user.email)
    

    const [carts, setCarts] = useState(filteredProducts)


    return (
        <div>
           <h1 className="text-5xl font-medium text-center my-10">My Purchases</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   carts.length > 0 ?  carts.map(cart => <CartProduct
                         key={cart._id}
                          cart={cart}
                          carts={carts}
                          setCarts={setCarts}
                          ></CartProduct>) : <div><p className="text-red-500 text-center text-xl md:ml-2">You did not Purchase any product so far...</p></div>
                }
            </div>
        </div>
    );
};

export default MyCart;