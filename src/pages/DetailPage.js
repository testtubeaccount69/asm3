import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../redux/cartSlice";
import PageBanner from "../components/PageBanner";

const DetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [allProducts, setAllProducts] = useState([]);
    const relatedProducts = allProducts.filter(
        (p) =>
            product &&
            p.category === product.category &&
            p._id !== product._id
    );
    const formatPrice = (price) =>
        Number(price || 0).toLocaleString("vi-VN");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
            );

            const data = await response.json();

            const loadedProducts = Object.values(data).map((item) => ({
                ...item,
                _id: item._id.$oid,
            }));

            setAllProducts(loadedProducts);

            const foundProduct = loadedProducts.find(
                (item) => item._id === productId
            );

            setProduct(foundProduct);
        };

        fetchProducts();
    }, [productId]);

    const [showDesc, setShowDesc] = useState(false);
    if (!product) return <div className="container py-5">Loading...</div>;

    const handleAddToCart = () => {
        dispatch(ADD_CART({ ...product, quantity }));
        navigate("/cart");
    };

    return (
        <> <PageBanner
            title="Details"
            breadcrumbs={[

                { label: "Details" }
            ]}
        />
            <div className="container py-5">




                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={product.img1} alt={product.name} className="img-fluid" />
                    </div>



                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <p>{formatPrice(product.price)} VND</p>
                        <p>{product.short_desc}</p>



                        <div className="d-flex mb-3">
                            <button className="btn btn-outline-dark" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                            <span className="mx-3">{quantity}</span>
                            <button className="btn btn-outline-dark" onClick={() => setQuantity(q => q + 1)}>+</button>
                        </div>

                        <button className="btn btn-dark" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* PRODUCT DESCRIPTION SECTION */}
                <div className="mt-5">

                    <button
                        className="btn btn-dark mb-3"
                        onClick={() => setShowDesc(prev => !prev)}
                    >
                        {showDesc ? "HIDE DESCRIPTION" : "DESCRIPTION"}

                    </button>

                    {showDesc && (
                        <>
                            <h4 className="fw-light mb-3">PRODUCT DESCRIPTION</h4>

                            <div style={{ whiteSpace: "pre-line" }}>
                                {product.long_desc}
                            </div>
                        </>
                    )}

                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-5">
                    <h4 className="fw-light mb-4">Related Products</h4>

                    <div className="row g-4">
                        {relatedProducts.map((item) => (
                            <div key={item._id} className="col-md-3 text-center">
                                <img
                                    src={item.img1}
                                    alt={item.name}
                                    className="img-fluid mb-2"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => navigate(`/detail/${item._id}`)}
                                />
                                <h6 className="fw-light">{item.name}</h6>
                                <p className="text-muted">
                                    {formatPrice(item.price)} VND
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;
