import { useNavigate } from "react-router-dom";
import "./login.css"

const Login = () => {
  const navigate = useNavigate();

  return (

    <>
    <div className="full">
      <div className="main-page">

        <div className="sign">
          <p>SIGN-IN</p>
        </div>

        <div className="username">
          <input type="text" placeholder="Username/E-Mail" />
        </div>

        <div className="password">
          <input type="password" placeholder="Password" />
        </div>

        <div className="remember">
           <input type="checkbox" name="remember" id="remember"></input>
           <label for="remember">Remember me</label>
           
          <div className="forgot">
              <p>Forgot Password?</p>
          </div>
        </div>

        <div className="btn-one">
        <div className="sign-btn">
          <button>SIGN-IN</button>
        </div>
      </div>


      <div className="or">
        <p>OR</p>
      </div>

    <div className="last">
      <div className="dont">
        <p>Don't have an account ?</p>
      </div>

      <div className="up">
        <p>Sign-Up</p>
      </div>
    </div>
      </div>
    </div>
    </>
  );
};

export default Login;