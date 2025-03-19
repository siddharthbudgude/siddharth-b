import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // if using react-router for navigation

export default function Customeraccount() {


    const [inputs, setInputs] = useState({});
    const [sportsClub, setSportsClub] = useState('India');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'sportsClub') {
            setSportsClub(value);
        } else {
            setInputs(values => ({ ...values, [name]: value }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", { ...inputs, sportsClub });
        navigate('/Successlogin');
    };
    return (
        <>



            <div className="container py-2 py-md-5">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card shadow border-0">
                            <div className="card-body p-3 p-md-5">
                                <h2 className="text-left mb-4 fw-bold">Create an Account</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={inputs.username || ""}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={inputs.email || ""}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Address</label>
                                        <textarea
                                            className="form-control"
                                            name="address"
                                            value={inputs.address || ""}
                                            onChange={handleChange}
                                            placeholder="Enter your address"
                                            rows="3"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Sports Club</label>
                                        <select
                                            className="form-select"
                                            name="sportsClub"
                                            value={sportsClub}
                                            onChange={handleChange}
                                        >
                                            <option value="India">India</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Argentina">Argentina</option>
                                        </select>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
