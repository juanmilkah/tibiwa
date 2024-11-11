"use client";

import { useState, useEffect } from "react";
import {
  AlertCircle,
  Clock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Bell,
} from "lucide-react";
import { type Medication } from "@/app/types";
import FetchMedications from "@/app/data/medications";

export default function Medication() {
  const [medications, setMedications] = useState<Medication[]>([]);
  const [filtredMedications, setFilteredMedications] = useState<Medication[]>(
    [],
  );
  const [filter, setFilter] = useState<"active" | "inactive" | "all">("all");
  const [expandedMedicationId, setExpandedMedicationId] = useState<
    string | null
  >(null);

  useEffect(() => {
    const data = FetchMedications();

    setMedications([...data]);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredMedications(medications);
    } else if (filter === "active") {
      setFilteredMedications(
        medications.filter((medication) => medication.isActive),
      );
    } else {
      setFilteredMedications(
        medications.filter((medication) => !medication.isActive),
      );
    }
  }, [medications, filter]);

  const ToggleShowDetails = (id: string) => {
    setExpandedMedicationId(expandedMedicationId === id ? null : id);
  };

  const FilterButton = ({
    label,
    value,
  }: {
    label: string;
    value: typeof filter;
  }) => (
    <button
      onClick={() => setFilter(value)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
        filter === value
          ? value === "active"
            ? "bg-green-500 text-white"
            : value === "inactive"
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-500"
      }`}
    >
      {label}
    </button>
  );

  const MedicationCard = ({ med }: { med: Medication }) => {
    const isExpanded = expandedMedicationId === med.id;

    return (
      <div className="mb-4 overflow-y-auto bg-white rounded-lg shadow-md">
        <div
          onClick={() => ToggleShowDetails(med.id)}
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center space-x-3">
            <div
              className={`w-2 h-2 rounded-full ${
                med.isActive ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <h2 className="text-lg font-medium text-gray-800">{med.name}</h2>
            {med.remindersEnabled && (
              <Bell size={16} className="text-blue-500" />
            )}
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>

        {isExpanded && (
          <div className="p-4 bg-gray-400 border-t border-gray-100">
            <div className="grid gap-4">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-600">Dosage:</span>
                <span>{med.dosage}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gray-500" />
                <span className="text-gray-600">{med.frequency}</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-600">
                  Prescribed by:
                </span>
                <span>{med.prescribedBy}</span>
              </div>

              {med.instructions && (
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-blue-800">{med.instructions}</p>
                </div>
              )}

              {med.sideEffects && med.sideEffects.length > 0 && (
                <div className="mt-2">
                  <h3 className="mb-2 font-medium text-gray-700">
                    Possible Side Effects:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {med.sideEffects.map((effect, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm text-red-700 rounded-full bg-red-50"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {med.refillsLeft !== undefined && (
                <div className="flex items-center space-x-2">
                  <RefreshCw size={16} className="text-gray-500" />
                  <span
                    className={`${
                      med.refillsLeft <= 1 ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    Refills left: {med.refillsLeft}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4 mx-auto">
      <div className="mb-6">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Medications</h1>
        <div className="flex space-x-4">
          <FilterButton label="All" value="all" />
          <FilterButton label="Active" value="active" />
          <FilterButton label="Inactive" value="inactive" />
        </div>
      </div>

      {filtredMedications.length > 0 ? (
        <div className="space-y-4">
          {filtredMedications.map((med) => (
            <MedicationCard key={med.id} med={med} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <AlertCircle className="w-12 h-12 mx-auto text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            No Medications Found
          </h2>
          <p className="mt-1 text-gray-500">
            No medications match your current filter.
          </p>
        </div>
      )}
    </div>
  );
}
