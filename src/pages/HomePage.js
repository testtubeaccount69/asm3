import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SHOW_POPUP } from "../redux/popupSlice";
import HomeExtra from "../components/HomeExtra";


const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const formatPrice = (price) => {
        if (!price) return "0";
        return Number(price).toLocaleString("vi-VN");
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
                );

                const data = await response.json();

                // Keep firebase keys as id
                const loadedProducts = Object.values(data).map(item => ({
                    ...item,
                    _id: item._id.$oid
                }));

                setProducts(loadedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>

            {/* ================= Banner Section ================= */}
            <div className="banner container py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="text-uppercase text-muted small">
                                New Inspiration 2020
                            </p>

                            <h1 className="fw-light mb-4">
                                20% OFF ON NEW <br /> SEASON
                            </h1>

                            <button
                                className="btn btn-dark px-4 py-2"
                                onClick={() => navigate("/shop")}
                            >
                                Browse collections
                            </button>
                        </div>

                        <div className="col-md-6 text-center">
                            <img
                                src="/banner1.jpg"
                                alt="banner"
                                className="img-fluid"
                                style={{ maxHeight: "40rem" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Categories Section ================= */}
            <div className="container">
                <div className="text-center my-5">
                    <p className="text-uppercase text-muted small mb-2">
                        Carefully Created Collections
                    </p>
                    <h4 className="fw-light">Browse Our Categories</h4>
                </div>

                {/* Row 1 */}
                <div className="row g-4 mb-4">
                    <div
                        className="col-md-6 text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/shop?category=iphone")}
                    >
                        <div className="category-card">
                            <img
                                src="/product_1.png"
                                alt="iPhone"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div
                        className="col-md-6 text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/shop?category=macbook")}
                    >
                        <div className="category-card">
                            <img
                                src="/product_2.png"
                                alt="Mac"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 mb-5">
                    <div
                        className="col-md-4 text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/shop?category=ipad")}
                    >
                        <div className="category-card">
                            <img
                                src="/product_3.png"
                                alt="iPad"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div
                        className="col-md-4 text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/shop?category=watch")}
                    >
                        <div className="category-card">
                            <img
                                src="/product_4.png"
                                alt="Watch"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    <div
                        className="col-md-4 text-center"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/shop?category=airpod")}
                    >
                        <div className="category-card">
                            <img
                                src="/product_5.png"
                                alt="AirPods"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>

                {/* ================= Top Trending ================= */}
                <div className="my-5">
                    <p className="text-uppercase text-muted small">
                        Made The Hard Way
                    </p>
                    <h4 className="fw-light mb-4">Top Trending Products</h4>

                    <div className="row g-4">
                        {products.slice(0, 8).map((product) => (
                            <div key={product._id} className="col-md-3 trending-card">
                                <div className="text-center">
                                    <img
                                        src={product.img1}
                                        alt={product.name}
                                        className="img-fluid mb-3"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => dispatch(SHOW_POPUP(product))}
                                    />

                                    <h6 className="fw-light">{product.name}</h6>

                                    <p className="text-muted">
                                        {formatPrice(product.price)} VND
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* ================= Extra ================= */}
                <HomeExtra />
            </div>
        </>
    );
};

export default HomePage;
