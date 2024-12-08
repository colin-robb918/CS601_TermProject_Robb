import { Link } from "react-router-dom";

export default function SubscriberTable(props) {

    const handleClick = (id) => {
        props.deleteSubscriber(id);
    }

    return (
        <div className="main-content">
            <h1>Subscriber Table</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {props.subscriberList.map(subscriber => (
                        <tr key={subscriber.id}>
                            <td>{subscriber.id}</td>
                            <td>{subscriber.first_name}</td>
                            <td>{subscriber.last_name}</td>
                            <td>{subscriber.email}</td>
                            <td>{subscriber.phone_number}</td>
                            <td>
                                <Link to={'/edit/' + subscriber.id}><button>Edit</button></Link>
                                <button onClick={() => handleClick(subscriber.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    );

}