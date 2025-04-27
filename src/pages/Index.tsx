
import StudentRegistrationForm from "@/components/StudentRegistrationForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Campus Vendor Connect</h1>
        <p className="text-gray-600 text-center">Register for a new account</p>
        <StudentRegistrationForm />
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
