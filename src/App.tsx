import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import { UserProvider } from "./components/UserContext";
import Balances from "./components/Balances";
import AdminLog from "./components/AdminLog";
import EditUserValues from "./components/EditUserValues";
//import { UsersProvider } from "./components/UsersContext";

function App() {
  return (
    <UserProvider>
      <div className="mainpage">
        <Router>
          <div className="mainpage">
            <div className="btndiv">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/success" element={<Balances />} />
                <Route path="/adminlog" element={<AdminLog />} />
                <Route path="/editing" element={<EditUserValues />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
