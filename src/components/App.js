import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from '../redux/actions';
import Users from './Users';
import Todos from './Todos';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Users />
        </div>
        <div>
          <Todos />
        </div>
      </div>
      
    </div>
  );
}

export default App;
