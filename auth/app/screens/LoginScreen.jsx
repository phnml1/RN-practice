import React, { useState, useContext } from "react";
import AuthContent from "../component/auth/AuthContent";
import LoadingOverlay from '../component/ui/LoadingOverlay';
import {login} from '../util/auth';
import { AuthContext } from '../store/auth-context';
import { Alert } from 'react-native';
function LoginScreen() {
  const [isAuthentcating, setIsAuthenticating] = useState();
    const authCtx = useContext(AuthContext);
  
  async function loginHandler({email,password}) {
    setIsAuthenticating(true);
    try {
    const token = await login(email,password);
    authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('Authenticatio failed!','Could not log you in. Please');
    }
    setIsAuthenticating(false);
  }
  if (isAuthentcating) {
    return <LoadingOverlay message="Logging you in..." />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
