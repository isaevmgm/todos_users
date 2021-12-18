import { useParams } from "react-router-dom";

function Todos (props) {
    const params = useParams();

    console.log(params);

    return (
        <div></div>
    )
}

export default Todos;