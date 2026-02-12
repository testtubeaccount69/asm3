import { useSelector } from "react-redux";
import PageBanner from "../components/PageBanner";
const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.listCart);

    const formatPrice = (price) =>
        Number(price || 0).toLocaleString("vi-VN");

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <PageBanner
                title="Checkout"
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Cart", link: "/cart" },
                    { label: "Checkout" }
                ]}
            />

            <div className="container py-5">



                <h3 className="mb-4">Checkout</h3>

                <div className="row">

                    {/* LEFT — FORM */}
                    <div className="col-md-8">
                        <h5 className="mb-3">Billing Details</h5>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input className="form-control" required />
                            </div>

                            <button className="btn btn-dark">
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* RIGHT — ORDER SUMMARY */}
                    <div className="col-md-4">
                        <div className="bg-light p-4">

                            <h4 className="mb-4 text-uppercase">Your Order</h4>

                            {cartItems.map(item => (
                                <div key={item._id} className="mb-3 border-bottom pb-2">

                                    <div className="d-flex justify-content-between">
                                        <span className="fw-bold">{item.name}</span>

                                        <span>
                                            {formatPrice(item.price)} VND
                                            {" "}x {item.quantity}
                                        </span>
                                    </div>

                                </div>
                            ))}

                            <div className="d-flex justify-content-between mt-4 fw-bold">
                                <span className="text-uppercase">Total</span>
                                <span className="fw-medium">{formatPrice(totalPrice)} VND</span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
