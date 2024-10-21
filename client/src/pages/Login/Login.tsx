import { useState } from "react";
import { Mail, Phone, Chrome } from "lucide-react";

const LoginMethods = {
  SELECT: "select",
  GOOGLE: "google",
  EMAIL: "email",
  PHONE: "phone",
};

// Assuming these components exist in your project
const LoginWithGoogle = () => <div>Google Login Component</div>;
const LoginWithEmail = () => <div>Email Login Component</div>;
const LoginWithPhonenumber = () => <div>Phone Login Component</div>;

export default function Login() {
  const [currentMethod, setCurrentMethod] = useState(LoginMethods.SELECT);

  const renderLoginContent = () => {
    switch (currentMethod) {
      case LoginMethods.GOOGLE:
        return (
          <>
            <button
              onClick={() => setCurrentMethod(LoginMethods.SELECT)}
              className="mt-4 text-sm text-blue-500 hover:text-blue-600"
            >
              ← Back to login methods
            </button>
            <LoginWithGoogle />
          </>
        );
      case LoginMethods.EMAIL:
        return (
          <>
            <button
              onClick={() => setCurrentMethod(LoginMethods.SELECT)}
              className="mt-4 text-sm text-blue-500 hover:text-blue-600"
            >
              ← Back to login methods
            </button>
            <LoginWithEmail />
          </>
        );
      case LoginMethods.PHONE:
        return (
          <>
            <button
              onClick={() => setCurrentMethod(LoginMethods.SELECT)}
              className="mt-4 text-sm text-blue-500 hover:text-blue-600"
            >
              ← Back to login methods
            </button>
            <LoginWithPhonenumber />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-8">
        {currentMethod === LoginMethods.SELECT && (
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please select a login method to continue
            </p>
          </div>
        )}

        {currentMethod === LoginMethods.SELECT ? (
          <div className="mt-8 space-y-4">
            <button
              onClick={() => setCurrentMethod(LoginMethods.GOOGLE)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Chrome className="w-5 h-5 mr-2 text-blue-500" />
              Continue with Google
            </button>
            <button
              onClick={() => setCurrentMethod(LoginMethods.EMAIL)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2 text-gray-500" />
              Continue with Email/Username
            </button>
            <button
              onClick={() => setCurrentMethod(LoginMethods.PHONE)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2 text-green-500" />
              Continue with Phone Number
            </button>
          </div>
        ) : (
          <div className="mt-8">{renderLoginContent()}</div>
        )}
      </div>
    </div>
  );
}
