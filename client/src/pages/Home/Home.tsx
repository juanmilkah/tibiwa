import DoctorDashboard from "../../components/Dashboard/User/Doctor/Dashboard";
import PatientDashboard from "../../components/Dashboard/User/Patient/Dashboard";
import GuestDashboard from "../../components/Dashboard/Guest/Dashboard";
import AccountType from "../../components/AccountType/AccountType";

export default function Home() {
  const accountType = AccountType();

  return accountType === "Patient" ? (
    <PatientDashboard />
  ) : accountType === "Doctor" ? (
    <DoctorDashboard />
  ) : (
    <GuestDashboard />
  );
}
