import { mockMedications } from "../components/Dashboard/User/components/MockData/MockMedications";

export default function FetchMedications() {
  const data = mockMedications;

  if (data.length > 1) {
    return data;
  } else {
    return [];
  }
}
