import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import SingUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SingUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
