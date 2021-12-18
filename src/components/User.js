import { Link } from 'react-router-dom';

function User (props) {
    return (
        <li className="list-group-item">
            <Link to={`/${props.user.id}`}>
               {props.user.name}           
            </Link>
        </li>
    )
}

export default User;