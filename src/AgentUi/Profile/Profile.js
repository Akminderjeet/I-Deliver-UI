// import Paper from '@mui/material/Paper';
// import React from 'react';
// import './Profile.css'

// export default function Profile() {
//     return (
//         <div className='profile-outer container-fluid'>
//             <Paper className='profile-inner'>Profile</Paper>
//         </div>
//     )
// }
import React from 'react';
import ProfileForm from './ProfileForm';

function App() {
    return (
        <div>
            <h1>Profile Details</h1>
            <ProfileForm />
        </div>
    );
}

export default App;
