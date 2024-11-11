import { mockAppointments } from "../components/Dashboard/User/components/MockData/MockAppointments";

export default function FetchAppointments() {
  const data = mockAppointments;
  if (data.length > 1) {
    return data;
  } else {
    return [];
  }
}
