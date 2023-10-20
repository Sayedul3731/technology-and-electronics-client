import { useLoaderData } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useState } from "react";


const MyCart = () => {

    const loadedCarts = useLoaderData()

    const [carts, setCarts] = useState(loadedCarts)
    return (
        <div>
           <h1 className="text-5xl font-medium text-center my-10">My Purchases</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    carts.map(cart => <CartProduct
                         key={cart._id}
                          cart={cart}
                          carts={carts}
                          setCarts={setCarts}
                          ></CartProduct>)
                }
            </div>
        </div>
    );
};

export default MyCart;