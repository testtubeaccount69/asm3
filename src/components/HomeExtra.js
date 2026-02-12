const HomeExtra = () => {
    return (
        <div className="my-5">

            {/* SERVICES STRIP */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-4">
                            <h6 className="fw-bold">FREE SHIPPING</h6>
                            <small className="text-muted">Free shipping worldwide</small>
                        </div>

                        <div className="col-md-4">
                            <h6 className="fw-bold">24 X 7 SERVICE</h6>
                            <small className="text-muted">Free shipping worldwide</small>
                        </div>

                        <div className="col-md-4">
                            <h6 className="fw-bold">FESTIVAL OFFER</h6>
                            <small className="text-muted">Free shipping worldwide</small>
                        </div>

                    </div>
                </div>
            </div>


            {/* NEWSLETTER */}
            <div className="container py-5">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h5 className="fw-bold">LET'S BE FRIENDS!</h5>
                        <small className="text-muted">
                            Nisi nisi tempor consequat laboris nisi.
                        </small>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email address"
                            />
                            <button className="btn btn-dark ms-2 px-4">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HomeExtra;
