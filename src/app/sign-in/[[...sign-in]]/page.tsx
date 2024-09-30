import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="login-register">
      <SignIn />
    </div>
  );
};

export default Login;
