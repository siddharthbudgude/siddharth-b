import "./style.css";
export default function Customerlogin() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add login logic here
    };
    return (
        <>

            <div className="container py-2 py-md-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card shadow border-0">
                            <div className="card-body p-3 p-md-5">
                                <h2 className="text-left mb-2 fw-bold">Welcome Back</h2>
                                <p className="text-left  mb-4 login-text">Please login to your account</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Login ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter your login ID"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control "
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="rememberMe"
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Login
                                        </button>
                                    </div>
                                    <p className="text-center mt-4">
                                        <a href="#" className="text-primary text-decoration-none">
                                            Forgot Password?
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


