import {Link} from 'react-router-dom'
const HeaderComponent = (props) => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/teams">Teams</Link>
            </li>
            <li>
                <Link to="/items">Items</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>

    );
}

export default HeaderComponent;