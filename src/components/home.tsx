import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="mainpage">
      <div className="btndiv">
        <h1>Welcome to Fake Banking online</h1>
        <h2>Sign In or Sign Up</h2>
        <button onClick={() => navigate("/signin")}>Sign In</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button className="admin" onClick={() => navigate("/adminlog")}>
          ADMIN
        </button>
      </div>
    </div>
  );
};

export default Home;
