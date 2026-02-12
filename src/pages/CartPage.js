import { useSelector, useDispatch } from "react-redux";
import { UPDATE_CART, DELETE_CART } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const CartPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.listCart);

    const formatPrice = (price) =>
        Number(price || 0).toLocaleString("vi-VN");

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <PageBanner
                title="Cart"
                breadcrumbs={[

                    { label: "Cart" }
                ]}
            />
            <div className="container py-5">
                <h4 className="mb-4">SHOPPING CART</h4>

                <div className="row">

                    {/* LEFT TABLE */}
                    <div className="col-md-8">

                        {/* Header */}
                        <div className="row fw-bold text-uppercase border-bottom pb-2 mb-3">
                            <div className="col-md-2">Image</div>
                            <div className="col-md-2">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                            <div className="col-md-2">Total</div>
                            <div className="col-md-2">Remove</div>
                        </div>

                        {/* Items */}
                        {cartItems.map(item => (
                            <div key={item._id} className="row align-items-center mb-4">

                                <div className="col-md-2">
                                    <img src={item.img1} className="img-fluid" />
                                </div>

                                <div className="col-md-2">
                                    {item.name}
                                </div>

                                <div className="col-md-2">
                                    {formatPrice(item.price)} VND
                                </div>

                                <div className="col-md-2 d-flex align-items-center">
                                    <i
                                        className="bi bi-caret-left-fill"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            dispatch(UPDATE_CART({
                                                _id: item._id,
                                                quantity: item.quantity - 1
                                            }))
                                        }
                                    ></i>

                                    <span className="mx-2">{item.quantity}</span>

                                    <i
                                        className="bi bi-caret-right-fill"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            dispatch(UPDATE_CART({
                                                _id: item._id,
                                                quantity: item.quantity + 1
                                            }))
                                        }
                                    ></i>
                                </div>

                                <div className="col-md-2">
                                    {formatPrice(item.price * item.quantity)} VND
                                </div>

                                <div className="col-md-2">
                                    <i
                                        className="bi bi-trash"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => dispatch(DELETE_CART(item._id))}
                                    ></i>
                                </div>

                            </div>
                        ))}

                        {/* Bottom navigation */}
                        <div className="d-flex justify-content-between mt-5 border-top pt-3">

                            <button
                                className="btn btn-light"
                                onClick={() => navigate("/shop")}
                            >
                                ← Continue shopping
                            </button>

                            <button
                                className="btn btn-outline-dark"
                                onClick={() => navigate("/checkout")}
                            >
                                Proceed to checkout →
                            </button>

                        </div>

                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="col-md-4">
                        <div className="bg-light p-4">
                            <h5 className="mb-4">CART TOTAL</h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>{formatPrice(totalPrice)} VND</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between mb-4 fw-bold">
                                <span>Total</span>
                                <span>{formatPrice(totalPrice)} VND</span>
                            </div>

                            <input
                                className="form-control mb-2"
                                placeholder="Enter your coupon"
                            />

                            <button className="btn btn-dark w-100">
                                <i className="bi bi-gift me-2"></i>
                                Apply coupon
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CartPage;
