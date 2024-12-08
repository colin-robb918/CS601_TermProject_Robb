import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/origin.html'>Where I'm From</Link>
                </li>
                <li>
                    <Link to='/hobbies.html'>My Hobbies</Link>
                </li>
                <li>
                    <Link to="/about.html">Our 2024 Was Busy</Link>
                </li>
                <li>
                    <Link to="/subscribers">Subscriber List</Link>
                </li>
                <li>
                    <Link to="/add-new-subscriber">Add New Subscriber</Link>
                </li>
            </ul>
        </div>
    )
}