import { type Appointment } from "../../../../../types";

export const mockAppointments: Appointment[] = [
  {
    id: "apt1",
    patientId: "p1",
    healthcareProviderId: "hp1",
    date: "2024-10-20T09:00:00.000Z",
    _type: "in-person",
    location: "New York Clinic",
    purpose: "General Checkup",
    status: "scheduled",
    completed: false,
    reminders: true,
    followUpNeeded: false,
  },
  {
    id: "apt2",
    patientId: "p2",
    healthcareProviderId: "hp2",
    date: "2024-10-19T13:00:00.000Z",
    _type: "telehealth",
    purpose: "Skin Rash Consultation",
    status: "scheduled",
    completed: true,
    notes: "Patient needs to apply prescribed cream for 1 week.",
    reminders: false,
    followUpNeeded: true,
  },
  {
    id: "apt3",
    patientId: "p3",
    healthcareProviderId: "hp1",
    date: "2024-10-22T11:30:00.000Z",
    _type: "home-visit",
    location: "Patient's Residence",
    purpose: "Blood Pressure Monitoring",
    status: "scheduled",
    completed: false,
    reminders: true,
    followUpNeeded: false,
  },
  {
    id: "apt4",
    patientId: "p4",
    healthcareProviderId: "hp3",
    date: "2024-10-18T15:00:00.000Z",
    _type: "telehealth",
    purpose: "Follow-up on Diabetes",
    status: "rescheduled",
    completed: true,
    notes: "Blood sugar levels stabilized.",
    reminders: false,
    followUpNeeded: true,
  },
  {
    id: "apt5",
    patientId: "p5",
    healthcareProviderId: "hp4",
    date: "2024-10-21T10:00:00.000Z",
    _type: "in-person",
    location: "Green Valley Hospital",
    purpose: "Teeth Whitening",
    status: "scheduled",
    completed: false,
    reminders: true,
  },
  {
    id: "apt6",
    patientId: "p6",
    healthcareProviderId: "hp5",
    date: "2024-10-18T14:00:00.000Z",
    _type: "home-visit",
    location: "Patient's Home",
    purpose: "Post-Surgery Wound Check",
    status: "scheduled",
    completed: true,
    notes: "Wound healing properly.",
    followUpNeeded: false,
  },
  {
    id: "apt7",
    patientId: "p7",
    healthcareProviderId: "hp3",
    date: "2024-10-23T16:00:00.000Z",
    _type: "in-person",
    location: "City Health Center",
    purpose: "Vaccination",
    status: "scheduled",
    completed: false,
    reminders: true,
  },
  {
    id: "apt8",
    patientId: "p8",
    healthcareProviderId: "hp4",
    date: "2024-10-24T09:30:00.000Z",
    _type: "telehealth",
    purpose: "Allergy Test Follow-Up",
    status: "canceled",
    completed: false,
    reminders: false,
  },
  {
    id: "apt9",
    patientId: "p9",
    healthcareProviderId: "hp5",
    date: "2024-10-25T14:00:00.000Z",
    _type: "home-visit",
    location: "Patient's Apartment",
    purpose: "Home Care Consultation",
    status: "scheduled",
    completed: true,
    notes: "Patient requires physiotherapy.",
    followUpNeeded: true,
  },
  {
    id: "apt10",
    patientId: "p10",
    healthcareProviderId: "hp1",
    date: "2024-10-26T12:00:00.000Z",
    _type: "in-person",
    location: "Sunrise Clinic",
    purpose: "Mental Health Therapy",
    status: "rescheduled",
    completed: false,
    reminders: true,
  },
];
