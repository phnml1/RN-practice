import AuthContent from "../component/auth/AuthContent";
import LoadingOverlay from '../component/ui/LoadingOverlay';
import {createUser} from '../util/auth';
import { useState, useContext } from "react";
import {AuthContext} from '../store/auth-context';
function SignupScreen() {
  const [isAuthentcating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({email,password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email,password);
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('Authentication failed', 'Could not create user, please check your credentials or try again later!');
    }
    setIsAuthenticating(false);
  }
  if (isAuthentcating) {
    return <LoadingOverlay message="Creating user..." />
  }
  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
