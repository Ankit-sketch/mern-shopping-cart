import { Link } from 'react-router-dom';

// import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className = "navbar">
            {/* <Link to="/"><img src = {logo} /></Link> */}
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}

export default Navbar
