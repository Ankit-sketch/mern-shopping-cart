import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = ({ history }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem("token")) {
            history.push("/");
        }
    },[history])


    const loginhandler = async (e: any) => {
        e.preventDefault();

        const config: any = {
            header: {
                "Content-Type": "application/json",
            }
        }

        try {
            const { data } = await axios.post(
                "/api/login",
                {
                    email,
                    password,
                },
                config
            );
            localStorage.setItem("token", data.access_token);
            history.push("/");
            setEmail('')
            setPassword('')
            toast.success('login successfully', {
                position: "top-center", autoClose: 2000,
            })

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
                <form onSubmit={loginhandler}>
                    {/* {error && <span className="error-message">{error}</span>} */}
                    <div className="form-group">
                        <input
                            type="email"
                            required
                            id="email"
                            value={email}
                            placeholder="Enter Email*"
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
                    <div className="register-screen__subtext">
                        <span>Not have account?</span><Link to="/signup" className="login-link">Sign Up</Link>
                    </div>
                    <button type="submit" className="button-submit ">
                        Login
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login;
