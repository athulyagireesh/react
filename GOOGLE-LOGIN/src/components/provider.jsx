import {GoogleOAuthProvider} from "@react-oauth/google";
import Login from "./login";

function Provider(){
    return(
        <GoogleOAuthProvider clientId="771318842588-8pv615aai05ri7haj1m5r32d2togs7fq.apps.googleusercontent.com">
            <Login></Login>
        </GoogleOAuthProvider>
    )
}

export default Provider
