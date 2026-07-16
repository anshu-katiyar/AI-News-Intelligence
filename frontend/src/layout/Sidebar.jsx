import {
  LayoutDashboard,
  FileText,
  Globe,
  History as HistoryIcon,
  Settings,
  MessageSquare,
} from "lucide-react";

function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <div className="w-64 h-screen bg-slate-900 border-r border-slate-800 p-5">

      <h1 className="text-2xl font-bold text-cyan-400 mb-10">

        🤖 AI News

      </h1>

      <ul className="space-y-6 text-gray-300">

<li
    onClick={() => setActiveMenu("dashboard")}
    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
        activeMenu === "dashboard"
            ? "bg-cyan-500 text-white"
            : "hover:text-cyan-400"
    }`}
>
          <LayoutDashboard size={20}/>

          Dashboard

        </li>

        <li
            onClick={() => setActiveMenu("news")}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
                activeMenu === "news"
                    ? "bg-cyan-500 text-white"
                    : "hover:text-cyan-400"
            }`}
        >

          <FileText size={20}/>

          Analyze News

        </li>

        <li
    onClick={() => setActiveMenu("url")}
    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
        activeMenu === "url"
            ? "bg-cyan-500 text-white"
            : "hover:text-cyan-400"
    }`}
>

          <Globe size={20}/>

          URL Analysis

        </li>

        <li
    onClick={() => setActiveMenu("chat")}
    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
        activeMenu === "chat"
            ? "bg-cyan-500 text-white"
            : "hover:text-cyan-400"
    }`}
>
    <MessageSquare size={20}/>
    AI Chat
</li>

        <li
    onClick={() => setActiveMenu("history")}
    className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
        activeMenu === "history"
            ? "bg-cyan-500 text-white"
            : "hover:text-cyan-400"
    }`}
>

    <HistoryIcon size={20}/>

    History

</li>

        <li
            onClick={() => setActiveMenu("settings")}
            className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg ${
                activeMenu === "settings"
                    ? "bg-cyan-500 text-white"
                    : "hover:text-cyan-400"
            }`}
        >

          <Settings size={20}/>

          Settings

        </li>

      </ul>

    </div>
  );
}

export default Sidebar;