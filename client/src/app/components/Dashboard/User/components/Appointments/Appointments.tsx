"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  User,
  Bell,
  AlertCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import type { Appointment } from "../../../../../types";
import { mockAppointments } from "../MockData/MockAppointments";

export default function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);

  useEffect(() => {
    setAppointments([...mockAppointments]);
  }, []);

  useEffect(() => {
    filterAppointments();
  }, [appointments, filter]);

  const filterAppointments = () => {
    if (filter === "completed") {
      setFilteredAppointments(appointments.filter((appt) => appt.completed));
    } else if (filter === "pending") {
      setFilteredAppointments(appointments.filter((appt) => !appt.completed));
    } else {
      setFilteredAppointments(appointments);
    }
  };

  // State to track which appointment is expanded
  const [expandedAppointmentId, setExpandedAppointmentId] = useState<
    string | null
  >(null);

  const toggleDetails = (id: string) => {
    // Toggle between showing and hiding the details of the appointment
    setExpandedAppointmentId((prevId) => (prevId === id ? null : id));
  };

  const FilterButton = ({
    label,
    value,
    icon: Icon,
  }: {
    label: string;
    value: typeof filter;
    icon: React.ElementType;
  }) => (
    <button
      onClick={() => setFilter(value)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        filter === value
          ? value === "completed"
            ? "bg-green-500 text-white"
            : value === "pending"
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const AppointmentCard = ({ appt }: { appt: Appointment }) => {
    const isExpanded = expandedAppointmentId === appt.id;

    return (
      <div className="overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        <div
          onClick={() => toggleDetails(appt.id)}
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
        >
          <div className="flex items-center space-x-4">
            <Calendar className="text-gray-500" size={20} />
            <div>
              <h2 className="font-medium text-gray-900">
                {new Date(appt.date).toLocaleDateString()}
              </h2>
              <div className="flex items-center text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                {new Date(appt.date).toLocaleTimeString()}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                appt.completed
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {appt.completed ? <CheckCircle size={14} /> : <Clock size={14} />}
              <span>{appt.completed ? "Completed" : "Pending"}</span>
            </span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>

        {isExpanded && (
          <div className="p-4 bg-gray-400 border-t border-gray-100 space-y-3">
            <div className="grid gap-3">
              <div className="flex items-center text-gray-700 space-x-2">
                <FileText size={16} className="text-gray-500" />
                <span className="font-medium">Purpose:</span> {appt.purpose}
              </div>

              <div className="flex items-center text-gray-700 space-x-2">
                <AlertCircle size={16} className="text-gray-500" />
                <span className="font-medium">Type:</span> {appt._type}
              </div>

              {appt.location && (
                <div className="flex items-center text-gray-700 space-x-2">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="font-medium">Location:</span> {appt.location}
                </div>
              )}

              {appt.notes && (
                <div className="flex items-start text-gray-700 space-x-2">
                  <FileText size={16} className="mt-1 text-gray-500" />
                  <div>
                    <span className="font-medium">Notes:</span>
                    <p className="mt-1">{appt.notes}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center text-gray-700 space-x-2">
                <User size={16} className="text-gray-500" />
                <span className="font-medium">Patient ID:</span>{" "}
                {appt.patientId}
              </div>

              <div className="flex items-center text-gray-700 space-x-2">
                <User size={16} className="text-gray-500" />
                <span className="font-medium">Provider ID:</span>{" "}
                {appt.healthcareProviderId}
              </div>

              {appt.reminders !== undefined && (
                <div className="flex items-center text-gray-700 space-x-2">
                  <Bell size={16} className="text-gray-500" />
                  <span className="font-medium">Reminders:</span>
                  {appt.reminders ? "Enabled" : "Disabled"}
                </div>
              )}

              {appt.followUpNeeded !== undefined && (
                <div className="flex items-center text-gray-700 space-x-2">
                  <AlertCircle size={16} className="text-gray-500" />
                  <span className="font-medium">Follow-up Needed:</span>
                  {appt.followUpNeeded ? "Yes" : "No"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 mx-auto bg-gray-50">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Appointments</h1>

      <div className="flex mb-6 space-x-4">
        <FilterButton label="All" value="all" icon={Calendar} />
        <FilterButton label="Completed" value="completed" icon={CheckCircle} />
        <FilterButton label="Pending" value="pending" icon={Clock} />
      </div>

      {filteredAppointments.length > 0 ? (
        <div className="space-y-4">
          {filteredAppointments.map((appt) => (
            <AppointmentCard key={appt.id} appt={appt} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <Calendar className="w-12 h-12 mx-auto text-gray-400" />
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            No Appointments Found
          </h2>
          <p className="mt-1 text-gray-500">
            No appointments match your current filter.
          </p>
        </div>
      )}
    </div>
  );
}
