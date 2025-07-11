import { Navigate } from "react-router-dom";

export function ProtectedRouter({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
