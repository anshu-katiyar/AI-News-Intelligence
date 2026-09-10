import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Settings() {

  const defaultSettings = {
    language: "English",
    summaryLength: "Medium",
    notifications: true,
    reports: true,
    theme: "dark",
  };

  const [settings, setSettings] = useState(() => {

    const saved = localStorage.getItem("settings");

    return saved
      ? { ...defaultSettings, ...JSON.parse(saved) }
      : defaultSettings;
  });

  // Apply settings automatically
  useEffect(() => {

    localStorage.setItem(
      "settings",
      JSON.stringify(settings)
    );

    // Theme
    if (settings.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [settings]);


  const updateSetting = (key, value) => {

  const currentSettings =
    JSON.parse(
      localStorage.getItem("settings") || "{}"
    );

  const updatedSettings = {
    ...currentSettings,
    [key]: value,
  };

  localStorage.setItem(
    "settings",
    JSON.stringify(updatedSettings)
  );

  setSettings(updatedSettings);

  toast.success("Setting updated ✅");

  setTimeout(() => {
    window.location.reload();
  }, 500);
};


  const clearData = () => {

    localStorage.removeItem("settings");

    setSettings(defaultSettings);

    toast.success("Settings reset successfully");

  };


  return (

    <div className="max-w-5xl mx-auto pb-10">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your AI News Intelligence preferences
        </p>

      </div>


      {/* Profile */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-5">
          👤 Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-gray-400 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-cyan-400"
            />

          </div>


          <div>

            <label className="block text-gray-400 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none focus:border-cyan-400"
            />

          </div>

        </div>

      </div>


      {/* Appearance */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-5">
          🎨 Appearance
        </h2>


        <div className="flex items-center justify-between">

          <div>

            <p className="text-white font-medium">
              Dark Mode
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Use dark appearance for the dashboard
            </p>

          </div>


          <button
            onClick={() =>
              updateSetting(
                "theme",
                settings.theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            className={`w-14 h-7 rounded-full transition ${
              settings.theme === "dark"
                ? "bg-cyan-500"
                : "bg-slate-700"
            }`}
          >

            <div
              className={`w-5 h-5 bg-white rounded-full transition ${
                settings.theme === "dark"
                  ? "translate-x-8"
                  : "translate-x-1"
              }`}
            />

          </button>

        </div>

      </div>


      {/* Notifications */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-5">
          🔔 Notifications
        </h2>


        <div className="space-y-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white font-medium">
                Analysis Notifications
              </p>

              <p className="text-gray-400 text-sm">
                Notify when news analysis is completed
              </p>

            </div>


            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                updateSetting(
                  "notifications",
                  e.target.checked
                )
              }
              className="w-5 h-5 accent-cyan-500"
            />

          </div>


          <div className="flex items-center justify-between">

            <div>

              <p className="text-white font-medium">
                PDF Report Notifications
              </p>

              <p className="text-gray-400 text-sm">
                Notify when a report is generated
              </p>

            </div>


            <input
              type="checkbox"
              checked={settings.reports}
              onChange={(e) =>
                updateSetting(
                  "reports",
                  e.target.checked
                )
              }
              className="w-5 h-5 accent-cyan-500"
            />

          </div>

        </div>

      </div>


      {/* Language */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-5">
          🌐 Language
        </h2>


        <label className="block text-gray-400 mb-2">
          Preferred Language
        </label>


        <select
          value={settings.language}
          onChange={(e) =>
            updateSetting(
              "language",
              e.target.value
            )
          }
          className="w-full md:w-1/2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none"
        >

          <option value="English">
            English
          </option>

          <option value="Hindi">
            Hindi
          </option>

        </select>

      </div>


      {/* Analysis Preferences */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-5">
          🤖 Analysis Preferences
        </h2>


        <label className="block text-gray-400 mb-2">
          Summary Length
        </label>


        <select
          value={settings.summaryLength}
          onChange={(e) =>
            updateSetting(
              "summaryLength",
              e.target.value
            )
          }
          className="w-full md:w-1/2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none"
        >

          <option value="Short">
            Short
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Detailed">
            Detailed
          </option>

        </select>


        <p className="text-gray-500 text-sm mt-2">

          {settings.summaryLength === "Short" &&
            "AI will generate a short and concise summary."}

          {settings.summaryLength === "Medium" &&
            "AI will generate a balanced summary."}

          {settings.summaryLength === "Detailed" &&
            "AI will generate a detailed and comprehensive summary."}

        </p>

      </div>


      {/* Local Data */}

      <div className="bg-slate-900 border border-red-900 rounded-2xl p-6 mb-6">

        <h2 className="text-xl font-semibold text-red-400 mb-3">
          🧹 Local Data
        </h2>


        <p className="text-gray-400 mb-5">
          Reset your saved application preferences.
        </p>


        <button
          onClick={clearData}
          className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold"
        >
          Reset Settings
        </button>

      </div>


      {/* About */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="text-xl font-semibold text-cyan-400 mb-3">
          ℹ️ About
        </h2>

        <p className="text-gray-400">

          AI News Intelligence is an AI-powered platform for
          news summarization, sentiment analysis, keyword extraction,
          entity recognition, URL analysis and AI-powered chat.

        </p>

        <p className="text-gray-500 text-sm mt-4">
          Version 2.0
        </p>

      </div>

    </div>

  );

}

export default Settings;