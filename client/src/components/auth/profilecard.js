


function Profilecard () {
    var details = JSON.parse(localStorage.getItem("details"));
    return (
        <div className="profile-card-container">
            <div className="profile-boxshadow-container">
            <img  src="userimage.png" className="userimage"/>
            <h4> Name : {details.name}</h4>
            <h4> Email: {details.email}</h4>
            {(details.user_type === 'S') ?  <h4> Student</h4> : (details.user_type === 'F') ? <h4>Faculty</h4> : <h4>Guest</h4> }
            </div>
           
        </div>
    )
}

export default Profilecard;