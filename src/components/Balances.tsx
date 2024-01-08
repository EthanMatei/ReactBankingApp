// Balances.tsx
import { useNavigate } from "react-router";
import { useUser } from "./UserContext";

const Balances = () => {
  const navigate = useNavigate();
  const { currentUser, setUser } = useUser();
  const { setUsers } = useUser(); // Add useUsers hook

  const handleWithdrawal = (amount) => {
    if (currentUser && currentUser.balance >= amount) {
      const updatedUser = {
        ...currentUser,
        balance: currentUser.balance - amount,
      };

      // Update the single user in the local state
      setUser(updatedUser);

      // Update the full users array in the global state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.email === currentUser.email ? updatedUser : user
        )
      );
    } else {
      alert("Insufficient funds");
    }
  };

  const handleDeposit = (amount) => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        balance: currentUser.balance + amount,
      };

      // Update the single user in the local state
      setUser(updatedUser);

      // Update the full users array in the global state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.email === currentUser.email ? updatedUser : user
        )
      );
    }
  };

  const handleLogOut = () => {
    // Update the full users array in the global state before navigating
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === currentUser?.email
          ? { ...user, balance: currentUser?.balance } // Update the balance
          : user
      )
    );

    navigate("/");
  };

  return (
    <div className="accountheader">
      <h1 className="welcome-message">
        {" "}
        Welcome Back to Your Account, {currentUser?.firstName} Below is your
        account Balance!{" "}
      </h1>

      <h2 className="balance-amount"> Balance: ${currentUser?.balance}</h2>
      <div className="button-container">
        <button onClick={() => handleWithdrawal(10)}>Withdrawl 10</button>
        <button onClick={() => handleWithdrawal(100)}>Withdrawl 100</button>
        <button onClick={() => handleWithdrawal(1000)}>Withdrawl 1000</button>
        <button onClick={() => handleDeposit(10)}>Deposit 10</button>
        <button onClick={() => handleDeposit(100)}>Deposit 100</button>
        <button onClick={() => handleDeposit(1000)}>Deposit 1000</button>
      </div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default Balances;
