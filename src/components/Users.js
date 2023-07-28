import { useSelector } from 'react-redux';

function Users() {
  const { users, isLoading, error } = useSelector((store) => store.users);

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
              <div>
                <span>First Name:</span>
                <span>{user.firstName}</span>
              </div>
              <div>
                <span>Last Name:</span>
                <span>{user.lastName}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
