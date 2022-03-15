import React from "react";
import styled from "styled-components";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";
import { useSelector, RootState } from "../../store";

interface IProps {
  closeModal: () => void;
}

const Container = styled.div`
    z-index: 11;
`;

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  const authMode = useSelector((state: RootState) => state.auth.authMode);

  return (
    <Container>
      {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
      {authMode === "login" && <LoginModal closeModal={closeModal} />}
    </Container>
  );
};

export default AuthModal;
