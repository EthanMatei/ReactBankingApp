import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router";
const AdminLog = () => {
  const navigate = useNavigate();
  const adminPass = "123456";
  const [enteredPass, setEnteredPass] = useState("");
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (enteredPass === adminPass) {
      // Passwords match - perform your admin login logic here
      console.log("Admin login successful");
      navigate("/editing");
    } else {
      // Passwords do not match - handle invalid password
      console.log("Invalid admin password");
    }
  }

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredPass(e.target.value);
  };

  return (
    <div className="AdminInput">
      <form onSubmit={handleSubmit}>
        <label>
          Type Admin Password
          <input
            type="password" // Use type "password" to hide the entered characters
            value={enteredPass}
            onChange={handlePasswordChange}
          />
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};

export default AdminLog;
