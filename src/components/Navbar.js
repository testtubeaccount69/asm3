import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ON_LOGOUT } from "../redux/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);

    return (
        <div className="py-3">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Left */}
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "me-3 text-decoration-none fw-semibold text-warning"
                                : "me-3 text-decoration-none text-dark"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            isActive
                                ? "text-decoration-none fw-semibold text-warning"
                                : "text-decoration-none text-dark"
                        }
                    >
                        Shop
                    </NavLink>
                </div>

                {/* Center */}
                <div className="fw-bold fs-4">
                    BOUTIQUE
                </div>

                {/* Right */}
                <div className="d-flex align-items-center">

                    {/* Cart */}
                    <NavLink
                        to="/cart"
                        className="me-4 text-decoration-none text-dark"
                    >
                        <i className="bi bi-cart me-1"></i>
                        Cart
                    </NavLink>

                    {currentUser ? (
                        <div className="d-flex align-items-center">

                            <i className="bi bi-person me-1"></i>

                            <span className="me-2">
                                {currentUser.name}
                            </span>

                            <i className="bi bi-caret-down-fill me-3"></i>

                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => dispatch(ON_LOGOUT())}
                            >
                                (Logout)
                            </span>

                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="text-decoration-none text-dark"
                        >
                            <i className="bi bi-person me-1"></i>
                            Login
                        </NavLink>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Navbar;
