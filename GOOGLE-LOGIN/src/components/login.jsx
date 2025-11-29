import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./login.css"

const Login = () => {

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
      
           
          <div className="forgot">
              <p>Forgot Password?</p>
          </div>
        </div>

        <div className="btn-one">
        <div className="sign-btn">
          <button>SIGN-IN</button>
        </div>
      </div>

<GoogleLogin
    onSuccess={(credentialResponse)=>
    {
        console.log(credentialResponse);
        let token=credentialResponse.credential;
        let user=jwtDecode(token);
        console.log(user);
        console.log(user.picture);
    }}
    onError={()=>{
            console.log("login failed");
        }}
/>;

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