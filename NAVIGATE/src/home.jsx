import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Homepage</h1>
      <button onClick={() => navigate("/login")}>
        Login
      </button>
    </>
  );
};

export default Home;