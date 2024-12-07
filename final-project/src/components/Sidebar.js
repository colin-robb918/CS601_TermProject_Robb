import {Link} from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/subscribers">Subscriber List</Link>
                </li>
                <li>
                    <Link to="/add-new-subscriber">Add New Subscriber</Link>
                </li>
                <li>
                    <Link to="/about.html">About Me</Link>
                </li>
            </ul>
        </div>
    )
}