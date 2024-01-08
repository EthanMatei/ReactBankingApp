import { useState } from "react";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = () => {
    // Retrieve users data from localStorage
    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    // Find a user with matching email and password
    const user = users.find(
      (u) => u.email === signInData.email && u.password === signInData.password
    );

    if (user) {
      // Successful sign-in logic, e.g., set user session
      setUser(user);
      navigate("/success");
    } else {
      // Unsuccessful sign-in logic, e.g., show error message
      console.log("Invalid email or password");
    }
  };
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="signinform">
      <form>
        <h1>Sign In</h1>
        <label>
          Username
          <input
            type="email"
            value={signInData.email}
            onChange={(e) =>
              setSignInData((prevData) => ({
                ...prevData,
                email: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={signInData.password}
            onChange={(e) =>
              setSignInData((prevData) => ({
                ...prevData,
                password: e.target.value,
              }))
            }
          />
        </label>
      </form>
      <button className="signinsub" onClick={handleSignIn}>
        Sign In
      </button>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default SignIn;
