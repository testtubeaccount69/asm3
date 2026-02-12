import { useDispatch, useSelector } from "react-redux";
import { HIDE_POPUP } from "../redux/popupSlice";
import { useEffect, useState } from "react";

const ProductPopup = () => {
    const dispatch = useDispatch();
    const { isOpen, product } = useSelector((state) => state.popup);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setVisible(true), 10); // trigger animation
        } else {
            setVisible(false);
        }
    }, [isOpen]);

    if (!isOpen || !product) return null;

    return (
        <div
            className={`popup-overlay ${visible ? "show" : ""}`}
            onClick={() => dispatch(HIDE_POPUP())}
        >
            <div
                className={`popup-content ${visible ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img
                            src={product.img1}
                            alt={product.name}
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-md-6">
                        <h4>{product.name}</h4>

                        <p>
                            {Number(product.price).toLocaleString("vi-VN")} VND
                        </p>

                        <p>{product.short_desc}</p>

                        <button
                            className="btn btn-dark mt-3"
                            onClick={() => dispatch(HIDE_POPUP())}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPopup;