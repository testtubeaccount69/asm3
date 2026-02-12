import { Link } from "react-router-dom";

const PageBanner = ({ title, breadcrumbs = [] }) => {
    return (
        <div className="container my-5">
            <div
                style={{
                    backgroundColor: "#f4f5f9",
                    padding: "60px 40px",
                }}
                className="d-flex justify-content-between align-items-center"
            >
                {/* LEFT TITLE */}
                <h2
                    className="fw-light text-uppercase m-0"
                    style={{ letterSpacing: "3px" }}
                >
                    {title}
                </h2>

                {/* RIGHT BREADCRUMB */}
                <div className="text-uppercase" style={{ fontSize: "14px" }}>
                    {breadcrumbs.map((item, index) => (
                        <span key={index}>
                            {item.link ? (
                                <Link to={item.link} className="text-dark text-decoration-none">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-muted">{item.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && " / "}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
