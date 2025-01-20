import {useState} from 'react';
import AuthContent from "../component/auth/AuthContent";
import LoadingOverlay from '../component/ui/LoadingOverlay';
import {login} from '../util/auth';
import { Alert } from 'react-native';
function LoginScreen() {
  const [isAuthentcating, setIsAuthenticating] = useState();
  async function loginHandler({email,password}) {
    setIsAuthenticating(true);
    try {
    await login(email,password);
    } catch(error) {
      Alert.alert('');
    }
    setIsAuthenticating(false);
  }
  if (isAuthentcating) {
    return <LoadingOverlay message="Logging you in..." />
  }
  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
