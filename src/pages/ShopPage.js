import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
            const data = await res.json();

            const loaded = Object.values(data).map(item => ({
                ...item,
                _id: item._id.$oid
            }));

            setProducts(loaded);
        };
        fetchProducts();
    }, []);

    const filtered =
        category === "all"
            ? products
            : products.filter(p =>
                p.category.toLowerCase().includes(category)
            );

    return (
        <><PageBanner
            title="Shop"
            breadcrumbs={[
                { label: "Shop" }
            ]}
        />

            <div className="container my-5">



                <div className="container my-5"> </div>
                <div className="row">
                    <div className="col-md-3">
                        <p onClick={() => setCategory("all")}>All</p>
                        <p onClick={() => setCategory("iphone")}>iPhone</p>
                        <p onClick={() => setCategory("ipad")}>iPad</p>
                        <p onClick={() => setCategory("macbook")}>Macbook</p>
                        <p onClick={() => setCategory("airpod")}>Airpod</p>
                        <p onClick={() => setCategory("watch")}>Watch</p>
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {filtered.map(product => (
                                <div key={product._id} className="col-md-4">
                                    <img
                                        src={product.img1}
                                        className="img-fluid"
                                        onClick={() => navigate(`/detail/${product._id}`)}
                                    />
                                    <h6>{product.name}</h6>
                                    <p>{Number(product.price).toLocaleString("vi-VN")} VND</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
