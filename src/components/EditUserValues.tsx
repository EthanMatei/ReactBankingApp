import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUser } from "./UserContext";

const EditUserValues = () => {
  // Use the useUsers hook to get the list of users
  const { users, setUsers } = useUser(); // Rename users to userList
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve users data from local storage on component mount
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const parsedUsers = JSON.parse(storedUsers);
      setUsers(parsedUsers);
    }
  }, [setUsers]);

  const handleClearUsers = () => {
    // Clear users from state and local storage
    localStorage.removeItem("users");
    setUsers([]); // Clear users in state
    navigate("/");
  };

  const handleExitAdmin = () => {
    navigate("/");
  };

  const handleAddBalance = (index) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index].balance += 1; // Increment balance
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const handleSubtractBalance = (index) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index].balance -= 1; // Decrement balance
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  return (
    <div>
      <h2>Welcome to the Admin Menu!</h2>
      <h3>All Users:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} - {user.lastName} - {user.balance}
            <button onClick={() => handleAddBalance(index)}>Add</button>
            <button onClick={() => handleSubtractBalance(index)}>
              Subtract
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearUsers}>Clear All Users</button>
      <button onClick={handleExitAdmin}>Exit Admin Menu</button>
    </div>
  );
};

export default EditUserValues;
