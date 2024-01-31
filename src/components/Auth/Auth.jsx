import { FiLogIn } from "react-icons/fi";
import { useColor } from '../../context/ColorContext';
import { AuthContainer, LoginContainer, LogIn, Register} from "./Auth.styled";

export const Auth = () => {
  const { selectedColor } = useColor();
  
  return (
    <AuthContainer>
      <LoginContainer>
        <FiLogIn stroke={selectedColor} />
        <LogIn>Log in</LogIn>
      </LoginContainer>
      <Register>Registration</Register>
    </AuthContainer>
  );
};