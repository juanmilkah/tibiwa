import type { Medication } from "../../../../../types";

export const mockMedications: Medication[] = [
  {
    id: "med-001",
    patientId: "1",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "once daily",
    prescribedBy: "Dr. Sarah Johnson",
    startDate: "2024-01-15T08:00:00Z",
    endDate: "2024-07-15T08:00:00Z",
    instructions: "Take in the morning with food",
    sideEffects: ["dizziness", "dry cough", "headache"],
    refillsLeft: 3,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-002",
    patientId: "2",
    name: "Metformin",
    dosage: "850mg",
    frequency: "twice daily",
    prescribedBy: "Dr. Michael Chen",
    startDate: "2023-12-01T09:00:00Z",
    instructions: "Take with meals",
    sideEffects: ["nausea", "stomach upset", "diarrhea"],
    refillsLeft: 5,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-003",
    patientId: "3",
    name: "Sertraline",
    dosage: "50mg",
    frequency: "once daily",
    prescribedBy: "Dr. Emily Williams",
    startDate: "2024-02-20T10:00:00Z",
    instructions: "Take in the morning",
    sideEffects: ["drowsiness", "insomnia", "nausea"],
    refillsLeft: 2,
    isActive: true,
    remindersEnabled: false,
  },
  {
    id: "med-004",
    patientId: "4",
    name: "Ibuprofen",
    dosage: "400mg",
    frequency: "as needed",
    prescribedBy: "Dr. Robert Martinez",
    startDate: "2024-03-01T08:00:00Z",
    endDate: "2024-03-14T08:00:00Z",
    instructions: "Take with food for pain relief",
    sideEffects: ["stomach upset", "heartburn"],
    refillsLeft: 0,
    isActive: false,
    remindersEnabled: false,
  },
  {
    id: "med-005",
    patientId: "5",
    name: "Levothyroxine",
    dosage: "75mcg",
    frequency: "once daily",
    prescribedBy: "Dr. Patricia Lee",
    startDate: "2023-11-15T07:00:00Z",
    instructions: "Take on empty stomach",
    sideEffects: ["weight changes", "anxiety", "tremors"],
    refillsLeft: 4,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-006",
    patientId: "6",
    name: "Amoxicillin",
    dosage: "500mg",
    frequency: "three times daily",
    prescribedBy: "Dr. James Wilson",
    startDate: "2024-03-10T09:00:00Z",
    endDate: "2024-03-24T09:00:00Z",
    instructions: "Complete full course of antibiotics",
    sideEffects: ["rash", "diarrhea"],
    refillsLeft: 0,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-007",
    patientId: "7",
    name: "Omeprazole",
    dosage: "20mg",
    frequency: "once daily",
    prescribedBy: "Dr. Lisa Brown",
    startDate: "2024-01-01T08:00:00Z",
    instructions: "Take before breakfast",
    sideEffects: ["headache", "stomach pain"],
    refillsLeft: 6,
    isActive: true,
    remindersEnabled: false,
  },
  {
    id: "med-008",
    patientId: "8",
    name: "Atorvastatin",
    dosage: "40mg",
    frequency: "once daily",
    prescribedBy: "Dr. David Kim",
    startDate: "2023-10-15T20:00:00Z",
    instructions: "Take in the evening",
    sideEffects: ["muscle pain", "liver problems"],
    refillsLeft: 1,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-009",
    patientId: "9",
    name: "Fluoxetine",
    dosage: "20mg",
    frequency: "once daily",
    prescribedBy: "Dr. Emily Williams",
    startDate: "2024-02-01T09:00:00Z",
    endDate: "2024-08-01T09:00:00Z",
    instructions: "Take in the morning with or without food",
    sideEffects: ["nausea", "insomnia", "anxiety"],
    refillsLeft: 3,
    isActive: true,
    remindersEnabled: true,
  },
  {
    id: "med-010",
    patientId: "10",
    name: "Hydrochlorothiazide",
    dosage: "25mg",
    frequency: "once daily",
    prescribedBy: "Dr. Sarah Johnson",
    startDate: "2024-01-20T08:00:00Z",
    instructions: "Take in the morning",
    sideEffects: ["increased urination", "dizziness"],
    refillsLeft: 5,
    isActive: true,
    remindersEnabled: true,
  },
];
