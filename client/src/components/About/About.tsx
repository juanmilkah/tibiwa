import { Link } from "react-router-dom";
import { CheckCircle, User, Clock, Phone, Heart } from "lucide-react";

export default function AboutComponent() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Empowering You to Manage Diabetes
      </h2>
      <p className="text-gray-700 mb-4">
        Managing diabetes can be overwhelming, but with Tibiwa, it doesn’t have
        to be. We’re here to simplify the process, offering tools and support
        tailored to your needs.
      </p>
      <p className="text-gray-700 mb-4">
        Our platform gives you control over your health by making it easier to
        track key metrics, schedule appointments, and stay on top of your
        medications. Here’s how Tibiwa helps you:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="flex items-center mb-2">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span>
            Quick and simple patient registration and profile management
          </span>
        </li>
        <li className="flex items-center mb-2">
          <Clock className="w-5 h-5 text-blue-500 mr-2" />
          <span>Never miss a dose with personalized medication reminders</span>
        </li>
        <li className="flex items-center mb-2">
          <User className="w-5 h-5 text-purple-500 mr-2" />
          <span>Schedule appointments with ease, right from your phone</span>
        </li>
        <li className="flex items-center mb-2">
          <Heart className="w-5 h-5 text-red-500 mr-2" />
          <span>
            Monitor vital signs like blood glucose and blood pressure remotely
          </span>
        </li>
        <li className="flex items-center mb-2">
          <Phone className="w-5 h-5 text-orange-500 mr-2" />
          <span>
            Consult with healthcare providers via chat or video, anytime
          </span>
        </li>
        <li className="flex items-center mb-2">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span>
            Receive alerts for abnormal readings for early intervention
          </span>
        </li>
      </ul>
      <p className="text-gray-700">
        Tibiwa makes managing diabetes easier, more efficient, and more
        accessible. Let us help you take control of your health, one step at a
        time.
      </p>
      <div className="text-center mt-4 mb-4">
        <Link
          to="/login"
          className="inline-block px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition duration-200"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
