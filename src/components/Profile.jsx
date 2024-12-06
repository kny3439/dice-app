
import '../styles/Profile.css'

function Profile({ img, name, summary }) {
    return (
        <div>
            <div className="profile">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default Profile