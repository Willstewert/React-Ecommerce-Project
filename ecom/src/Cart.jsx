import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, increment, decrement } from "./Stores/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  console.log(cartList);

  const total = cartList.reduce((total, element) => {
    total += element.totalPrice;
    return total;
  }, 0);
  console.log(total);

  return (
    <>
      <section>
        <ul className="cart">
          {cartList.map((products, i) => (
            <li key={i} className="cart_list">
              
              <span className="cart_text">{products.name}</span>
              <span className="cart_text">{products.price}</span>
              <span className="cart_text">{products.quantity}</span>
              <span className="cart_text">
                Total Price:{products.totalPrice}
              </span>
              <button onClick={() => dispatch(increment(products.id))}>
                +
              </button>
              <button onClick={() => dispatch(decrement(products.id))}>
                -
              </button>
              <button onClick={() => dispatch(remove(products.id))}>
                REMOVE
              </button>
            </li>
          ))}
        </ul>
        <span
          style={{
            float: "right",
            backgroundColor: "salmon",
            color: "#fff",
            padding: "5px 10px",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Total:{total}
        </span>
      </section>
    </>
  );
};

export default Cart;
