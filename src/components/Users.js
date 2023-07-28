import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/users/usersSlice';

function Users() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p className="error">Error: Something went wrong</p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
                <span>{user.name.first}</span>
                {' '}
                <span>{user.name.last}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
