const Footer = () => {
    return (
        <footer className="bg-black text-white pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row gy-4">

                    <div className="col-md-4">
                        <h6 className="mb-4 fw-bold text-uppercase">
                            Customer Services
                        </h6>
                        <p className="mb-2">Help & Contact Us</p>
                        <p className="mb-2">Returns & Refunds</p>
                        <p className="mb-2">Online Stores</p>
                        <p className="mb-2">Terms & Conditions</p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="mb-4 fw-bold text-uppercase">
                            Company
                        </h6>
                        <p className="mb-2">What We Do</p>
                        <p className="mb-2">Available Services</p>
                        <p className="mb-2">Latest Posts</p>
                        <p className="mb-2">FAQs</p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="mb-4 fw-bold text-uppercase">
                            Social Media
                        </h6>
                        <p className="mb-2">Twitter</p>
                        <p className="mb-2">Instagram</p>
                        <p className="mb-2">Facebook</p>
                        <p className="mb-2">Pinterest</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;