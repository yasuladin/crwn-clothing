import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import SingUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
