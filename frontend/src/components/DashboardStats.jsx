import { useEffect, useState } from "react";
import api from "../services/api";
import StatsCard from "./StatsCard";

function DashboardStats() {

  const [stats,setStats]=useState({

      users:0,

      news:0,

      reports:0,

      requests:0

  });

  useEffect(()=>{

      loadStats();

  },[]);

  const loadStats=async()=>{

      const res=await api.get("/dashboard/stats");

      setStats(res.data);

  }

  return(

<div className="grid grid-cols-4 gap-6 mb-8">

<StatsCard

title="News"

value={stats.news}

color="bg-cyan-600"

/>

<StatsCard

title="Users"

value={stats.users}

color="bg-green-600"

/>

<StatsCard

title="Reports"

value={stats.reports}

color="bg-purple-600"

/>

<StatsCard

title="AI Requests"

value={stats.requests}

color="bg-orange-500"

/>

</div>

);

}

export default DashboardStats;