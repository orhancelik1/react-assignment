import React from "react";

const UserCard = ({user}) => {
      return (
        
            <div class="card">
                <div className="card-img">
                    <img className="image" src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}/>
                </div>

                <div class="card-body">
                    <h1>{user.name}</h1>
                    <p><b>Email: </b> {user.email}</p>
                    <p><b>Phone: </b> {user.phone}</p>
                    <p><b>Company: </b> {user.company.name}</p>
                    <p><b>Website: </b> {user.website}</p>
                    <p><b>Address</b>{user.address.street}, {user.address.suite},   {user.address.city}, {user.address.zipcode}</p>
                </div>
            </div>
      )
    };
export default UserCard
