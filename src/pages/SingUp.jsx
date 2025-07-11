import { Link, Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useState } from "react";

import toast from "react-hot-toast";

function SingUp() {
  const { dispatch } = useContext(GlobalContext);
  const [toLogin, setToLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const avatarUrl = formData.get("avatarUrl");

    const newUserData = {
      DisplayName: displayName,
      email: email,
      password: password,
      avatar: avatarUrl,
    };

    dispatch({ type: "UPDATE_USER_DATA", payload: newUserData });
    toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");

    setToLogin(true);
  };

  if (toLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">
            SingUp
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Ism Familiya
              </label>
              <input
                name="displayName"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Ismingiz va familiyangizni kiriting"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Email manzilingizni kiriting"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Parol
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="Parolingizni kiriting"
              />
            </div>

            <div>
              <label
                htmlFor="avatarUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Avatar URL
              </label>
              <input
                name="avatarUrl"
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Ro'yxatdan o'tish
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Allaqachon akaunt bormi?
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
            >
              Tizimga kiring
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingUp;
