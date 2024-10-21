import SignupWithGoogle from "./components/SignupWithGoogle";
import SignupWithEmail from "./components/SignupWithEmail";
import SignupWithPhonenumber from "./components/SignupWithPhonenumber";
import { useState } from "react";
import { Mail, Phone, Chrome, UserPlus } from "lucide-react";

const SignupMethods = {
  SELECT: "select",
  GOOGLE: "google",
  EMAIL: "email",
  PHONE: "phone",
};

export default function Signup() {
  const [currentMethod, setCurrentMethod] = useState(SignupMethods.SELECT);

  const renderSignupContent = () => {
    switch (currentMethod) {
      case SignupMethods.GOOGLE:
        return (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentMethod(SignupMethods.SELECT)}
              className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
            >
              ← Back to signup methods
            </button>
            <SignupWithGoogle />
          </div>
        );
      case SignupMethods.EMAIL:
        return (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentMethod(SignupMethods.SELECT)}
              className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
            >
              ← Back to signup methods
            </button>
            <SignupWithEmail />
          </div>
        );
      case SignupMethods.PHONE:
        return (
          <div className="space-y-6">
            <button
              onClick={() => setCurrentMethod(SignupMethods.SELECT)}
              className="text-sm text-blue-500 hover:text-blue-600 flex items-center"
            >
              ← Back to signup methods
            </button>
            <SignupWithPhonenumber />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-8">
        {currentMethod === SignupMethods.SELECT && (
          <div className="text-center">
            <div className="flex justify-center">
              <UserPlus className="h-12 w-12 text-blue-500" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Choose how you'd like to create your account
            </p>
          </div>
        )}

        {currentMethod === SignupMethods.SELECT ? (
          <div className="mt-8 space-y-4">
            <button
              onClick={() => setCurrentMethod(SignupMethods.GOOGLE)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Chrome className="w-5 h-5 mr-2 text-blue-500" />
              Sign up with Google
            </button>
            <button
              onClick={() => setCurrentMethod(SignupMethods.EMAIL)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2 text-gray-500" />
              Sign up with Email
            </button>
            <button
              onClick={() => setCurrentMethod(SignupMethods.PHONE)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2 text-green-500" />
              Sign up with Phone Number
            </button>
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:text-blue-600">
                  Log in
                </a>
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-8">{renderSignupContent()}</div>
        )}
      </div>
    </div>
  );
}
