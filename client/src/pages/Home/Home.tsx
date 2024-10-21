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
      <b>Patients Dashboard</b>
      <DoctorDashboard />
    </>
  ) : (
    <>
      <b>Patients Dashboard</b>
      <GuestDashboard />
    </>
  );
}
