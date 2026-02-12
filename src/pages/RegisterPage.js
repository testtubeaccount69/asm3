import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, phone } = form;

        if (!name || !email || !password || !phone) {
            return alert("Please fill all fields");
        }

        if (password.length < 8) {
            return alert("Password must be at least 8 characters");
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(user => user.email === email);

        if (exists) {
            return alert("Email already exists");
        }

        users.push(form);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Register successful!");
        navigate("/login");
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
                    width: "450px",
                    borderRadius: "10px",
                }}
            >
                <h2 className="text-center mb-4 fw-light">Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-3 p-3"
                        placeholder="Full Name"
                        name="name"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3 p-3"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3 p-3"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-4 p-3"
                        placeholder="Phone"
                        name="phone"
                        onChange={handleChange}
                    />

                    <button className="btn btn-dark w-100 py-3">
                        SIGN UP
                    </button>
                </form>

                <p className="text-center mt-4">
                    Login?{" "}
                    <span
                        style={{ color: "#0d6efd", cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Click
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
