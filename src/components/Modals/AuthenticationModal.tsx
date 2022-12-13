import React from "react";
import { AuthenticationDilog } from "./Modal.style";
interface modalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const AuthenticationModal = ({ open, onClose, children }: modalProps) => {
  return (
    <AuthenticationDilog open={open} onClose={onClose}>
      {children}
    </AuthenticationDilog>
  );
};
export default AuthenticationModal;
