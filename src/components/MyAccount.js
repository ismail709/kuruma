import React from 'react'
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from '../api/user';
import { LogOut } from '../slices/user';

function MyAccount({user}) {


    const [logOut,{isSuccess}] = useLogOutMutation();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        logOut().then((val) => {
            console.log(val.data.auth)
            dispatch(LogOut());
        });

    }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <div className='fs-1'>
            {user.username}
        </div>
        <div>
            <button className="btn btn-outline-secondary" onClick={(e) => handleLogout()}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default MyAccount