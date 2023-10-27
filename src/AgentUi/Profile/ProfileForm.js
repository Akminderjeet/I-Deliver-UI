
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import profile from '../../icons/IDeliverMark.png'
import './Profile.css'
import { setProfile } from '../../api';

export default function ProfileForm() {
    const [formData, setFormData] = useState({
        name: '',
        dp: '',
        mobile: '',
        city: '',
        bankUpi: '',
        aadharCard: '',
        gender: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log(formData);
        setProfile(formData);
    };

    return (
        < >
            <div style={{ marginLeft: '20px' }}><Avatar alt="Remy Sharp" src={profile} sx={{ width: 70, height: 70 }} /></div>
            <div style={{ marginTop: '30px', marginLeft: '20px' }} >
                <div className='form-outer'>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '400px', marginRight: '50px' }}
                    />
                </div>
                <div className='form-outer'>
                    <TextField
                        label="Mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                </div>
                <div className='form-outer'>
                    <TextField
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                    <TextField
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                </div>
                <div className='form-outer'>
                    <TextField
                        label="Aadhar Card Number"
                        name="aadharCard"
                        value={formData.aadharCard}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                    <TextField
                        label="Bank UPI"
                        name="bankUpi"
                        value={formData.bankUpi}
                        onChange={handleChange}
                        variant="outlined"
                        style={{ width: '300px', marginRight: '50px' }}
                    />
                </div>

                <Button variant="contained" onClick={handleSubmit} color="primary" type="submit" style={{ marginTop: '20px' }}>
                    Save
                </Button>
            </div>
        </>
    );
}
