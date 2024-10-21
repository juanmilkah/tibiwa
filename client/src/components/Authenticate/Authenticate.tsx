import { Navigate } from "react-router-dom";
import AccountType from "../AccountType/AccountType";

const isAuthenticated = () => {
  const userType = AccountType();
  if (userType === "Patient" || userType === "Doctor") {
    return true;
  } else {
    return false;
  }
};

export default function Authenticate({ children }: any) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
