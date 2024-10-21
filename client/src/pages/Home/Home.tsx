import DoctorDashboard from "../../components/Dashboard/User/Doctor/Dashboard";
import PatientDashboard from "../../components/Dashboard/User/Patient/Dashboard";
import GuestDashboard from "../../components/Dashboard/Guest/Dashboard";
import AccountType from "../../components/AccountType/AccountType";

export default function Home() {
  const accountType = AccountType();

  return accountType === "Patient" ? (
    <>
      <b>Patients Dashboard</b>
      <PatientDashboard />
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
