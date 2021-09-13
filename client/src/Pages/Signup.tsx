import { useState, useEffect } from 'react';

import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Signup = ({ history }: any) => {
console.log("signup prop", history)
    const [username, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.push("/");
        }
    },[history])
    const registerhandler = async (e: any) => {
        e.preventDefault();

        const config: any = {
            header: {
                "Content-Type": "application/json",
            }
        }
        if (password !== repeat_password) {
            setPassword('');
            setConfirmPassword('');
            return toast.error('🦄password donot match', {
                position: "top-center", autoClose: 2000, hideProgressBar: true,
            })
        }
        try {
            const { data } = await axios.post(
                "/api/register",
                {
                    username,
                    email,
                    password,
                },
                config
            );
            setname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            toast.success('🦄registered successfully', {
                position: "top-center", autoClose: 2000,
            })
            setTimeout(() => {
                history.push("/login")
            }, 2000);
        } catch (error: any) {
            return toast.error(`🦄${error.response.data.message}`, {
                position: "top-center", autoClose: 2000,
            })
        }
    }

    return (
        <div className="signup-wraapper">
            <div className="container">
                <h1>Register Here</h1>
                <form onSubmit={registerhandler}>
                    {/* {error && <span className="error-message">{error}</span>} */}
                    <div className="form-group">

                        <input
                            type="text"
                            required
                            id="name"
                            value={username}
                            placeholder="Enter username*"
                            autoComplete="off"
                            onChange={(e: any) => setname(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            required
                            id="email"
                            value={email}
                            placeholder="Enter Email*"
                            autoComplete="off"
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            required
                            id="password"
                            value={password}
                            placeholder="Enter Password*"
                            autoComplete="off"
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            required
                            id="repeat_password"
                            value={repeat_password}
                            placeholder="Retype password*"
                            autoComplete="off"
                            onChange={(e: any) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="register-screen__subtext">
                        <span>Already have an account?</span><Link to="/login" className="login-link">Login</Link>
                    </div>
                    <button type="submit" className="button-submit ">
                        Register
                    </button>

                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Signup;
