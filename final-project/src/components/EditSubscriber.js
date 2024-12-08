import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditSubscriber({ subscriberList, updateSubscriber }) {

    // grab id from URL
    let { id } = useParams();
    id = parseInt(id);

    const subscriberToEdit = subscriberList.find(s => s.id === id);

    // state
    const [formData, setFormData] = useState(
        {
            id: id,
            first_name: "",
            last_name: "",
            email: "",
            phone_number: ""
        }
    );

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (subscriberToEdit) {
            setFormData(subscriberToEdit);
        }
    }, [subscriberToEdit]);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(previousState => ({ ...previousState, [name]: value }))
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
        if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone_number.trim()) newErrors.phone_number = "Phone Number is required";

        // set errrors
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            updateSubscriber(id, formData);
            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone_number: ""
            })
            setErrors({});
            setSuccess(true);

            setTimeout(() => {
                navigate('/subscribers');
            }, 2000);
        }

    };

    return (
        <div className='main-content'>
            <h1>Update Subscriber</h1>

            {success ? <h2>Updated Successfully!  Redirecting...</h2>
                :
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <br />
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p style={{ color: 'red' }}>{errors.first_name}</p>}
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <br />
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p style={{ color: 'red' }}>{errors.last_name}</p>}
                    </div>

                    <div>
                        <label>Email:</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>

                    <div>
                        <label>Company:</label>
                        <br />
                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                        {errors.phone_number && <p style={{ color: 'red' }}>{errors.phone_number}</p>}
                    </div>

                    <button type="submit" style={{ marginTop: '10px' }}>
                        Update Subscriber
                    </button>
                </form>
            }
        </div>
    );
}
