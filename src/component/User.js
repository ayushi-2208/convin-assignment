import React from 'react'

const User = ({ user, loading }) => {
    if (loading)
        return <h2>Loading...</h2>

    if (user === null && loading === false) {
        return <div className=' emptyCard'>
            <h3 className='head'>
                Please select any number
            </h3>
        </div>
    }

    return (
        <div className='card '>
            <div className='userdetail'>
                <div className='name'>
                    <h3>{user.first_name} {user.last_name}</h3>
                </div>
                <div className='email'>
                    <h5>{user.email}</h5>
                </div>
            </div>
            <div className='minicard'>
                <img src={user.avatar} alt="userphoto" />
            </div>
        </div>
    )
}

export default User;
