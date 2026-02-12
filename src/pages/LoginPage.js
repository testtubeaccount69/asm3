import { useState } from "react";
import { useDispatch } from "react-redux";
import { ON_LOGIN } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            user => user.email === form.email && user.password === form.password
        );

        if (!foundUser) {
            return alert("Invalid credentials");
        }

        dispatch(ON_LOGIN(foundUser));
        navigate("/");
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: "url('/banner1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="bg-white p-5 shadow"
                style={{
                    width: "420px",
                    borderRadius: "10px",
                }}
            >
                <h2 className="text-center mb-4 fw-light">Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-3 p-3"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-4 p-3"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />

                    <button className="btn btn-dark w-100 py-3">
                        SIGN IN
                    </button>
                </form>

                <p className="text-center mt-4">
                    Create an account?{" "}
                    <span
                        style={{ color: "#0d6efd", cursor: "pointer" }}
                        onClick={() => navigate("/register")}
                    >
                        Sign up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

