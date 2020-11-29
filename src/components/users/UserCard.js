import React from 'react'

const UserCard = ({user}) => {
    return (
        
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card z-depth-0 p-5">
                        <div className="card-body">
                            <h5 className="card-title text-gray-600">{ user.name }</h5>
                            <h6 className="card-subtitle mb-2 text-gray-400 text-muted">{user.company.name}</h6>
                            <p className="card-text text-gray-600">{user.company.catchPhrase}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserCard
