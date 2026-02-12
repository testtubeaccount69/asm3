import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const categoryFromUrl = searchParams.get("category");

        if (categoryFromUrl) {
            setCategory(categoryFromUrl);
        } else {
            setCategory("all");
        }
    }, [searchParams]);


    const fetchProducts = async () => {
        setLoading(true)
        try {
            const res = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
            const data = await res.json();
            const loaded = Object.values(data).map(item => ({
                ...item,
                _id: item._id.$oid
            }));

            setProducts(loaded);
        } catch (error) {
            console.error('Fetch products failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const categories = ["all", "iphone", "ipad", "macbook", "airpod", "watch"];

    const handleFilter = (cat) =>
        navigate(cat === "all" ? "/shop" : `/shop?category=${cat}`);


    const filtered =
        category === "all"
            ? products
            : products.filter(p =>
                p.category.toLowerCase().includes(category)
            );
    return (
        <>
            <PageBanner
                title="Shop"
                breadcrumbs={[
                    { label: "Shop" }
                ]}
            />

            <div className="container my-5">
                <div className="container my-5"> </div>
                <div className="row">
                    <div className="col-md-3">
                        {categories.map((cat) => (
                            <p
                                key={cat}
                                onClick={() => handleFilter(cat)}
                                className={category === cat ? "fw-bold" : ""}
                                style={{ cursor: "pointer", textTransform: "capitalize" }}
                            >
                                {cat}
                            </p>
                        ))}
                    </div>


                    <div className="col-md-9">
                        {loading ?
                            <div className="text-center"><div className="spinner" /> Loading</div>
                            :
                            <div className="row">
                                {filtered.map(product => (
                                    <div key={product._id} className="col-md-4">
                                        <img
                                            src={product.img1}
                                            alt="product"
                                            className="img-fluid"
                                            onClick={() => navigate(`/detail/${product._id}`)}
                                        />
                                        <h6>{product.name}</h6>
                                        <p>{Number(product.price).toLocaleString("vi-VN")} VND</p>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
