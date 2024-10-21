export type Appointment = {
  id: string; // unique identifier for the appointment
  patientId: string; // reference to the patient
  healthcareProviderId: string; // reference to the healthcare provider
  date: string; // date and time of the appointment (ISO 8601 format)
  _type: "in-person" | "telehealth" | "home-visit"; // type of appointment
  location?: string; // optional for in-person appointments
  purpose: string; // reason for the appointment
  status: "scheduled" | "canceled" | "rescheduled"; // appointment status
  completed: boolean; // true if the appointment has been completed
  notes?: string; // optional notes from patient or provider
  reminders?: boolean; // true if reminders are enabled
  followUpNeeded?: boolean; // true if a follow-up is required
};

export type Medication = {
  id: string; // Unique identifier for the medication
  name: string; // Name of the medication
  dosage: string; // Dosage amount (e.g., "500mg")
  frequency: string; // Frequency of intake (e.g., "twice a day")
  prescribedBy: string; // Healthcare provider who prescribed the medication
  startDate: string; // Start date of the medication (ISO string format)
  endDate?: string; // Optional end date for the medication (ISO string format)
  instructions?: string; // Additional instructions for taking the medication
  sideEffects?: string[]; // Optional list of possible side effects
  refillsLeft?: number; // Optional number of refills left
  isActive: boolean; // Whether the medication is currently active
  remindersEnabled?: boolean; // Whether reminders for taking the medication are enabled
};
