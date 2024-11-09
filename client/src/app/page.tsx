import AccountType from "./account-type";
import GuestDashboard from "./components/Dashboard/Guest/Dashboard";
import DoctorDashboard from "./components/Dashboard/User/Doctor/Dashboard";
import UserDashboard from "./components/Dashboard/User/Patient/Dashboard";

export default function Home() {
  const accountType = AccountType();

  return accountType === "Patient" ? (
    <>
      <b>Patients Dashboard</b>
      <UserDashboard />
    </>
  ) : accountType === "Doctor" ? (
    <>
      <b>Doctors Dashboard</b>
      <DoctorDashboard />
    </>
  ) : (
    <>
      <b>Guests Dashboard</b>
      <GuestDashboard />
    </>
  );
}
