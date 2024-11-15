import AccountType from "../account-type";
import AdminDashboard from "./components/dashboard";

export default function AdminPage() {
  const user = AccountType();

  return <>{user === "Admin" && <AdminDashboard />}</>;
}
