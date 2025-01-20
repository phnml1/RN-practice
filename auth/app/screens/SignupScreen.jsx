import AuthContent from "../component/auth/AuthContent";
import LoadingOverlay from '../component/ui/LoadingOverlay';
import {createUser} from '../util/auth';
import { useState } from "react";
function SignupScreen() {
  const [isAuthentcating, setIsAuthenticating] = useState(false);
  async function signupHandler({email,password}) {
    setIsAuthenticating(true);
    try {
      await createUser(email,password);
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
