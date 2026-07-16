import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import { useState } from "react";
import NewsInput from "../components/NewsInput";
import DashboardStats from "../components/DashboardStats";
import UsageChart from "../components/UsageChart";
import UrlAnalysis from "../components/UrlAnalysis";
import AIChatPage from "../components/AIChatPage";
import History from "../components/History";


function Dashboard() {

    const [activeMenu, setActiveMenu] = useState("dashboard");
  return (

    <div className="flex bg-slate-950 text-white">

     <Sidebar
    activeMenu={activeMenu}
    setActiveMenu={setActiveMenu}
/>

      <div className="flex-1">

        <Navbar/>

        <div className="p-8">

    {activeMenu === "dashboard" && (
    <>
        <DashboardStats />
        <UsageChart />
    </>
)}

{activeMenu === "news" && (
    <NewsInput />
   
)}
{activeMenu === "url" && (
    <UrlAnalysis />
)}
{activeMenu === "ai-chat" && (
    <AIChatPage />
)}

{activeMenu === "history" && (
    <History />
)}

</div>

      </div>

    </div>

  );

}

export default Dashboard;