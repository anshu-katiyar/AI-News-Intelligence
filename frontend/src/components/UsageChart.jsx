import {

LineChart,

Line,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

} from "recharts";

const data=[

{name:"Mon",value:20},

{name:"Tue",value:35},

{name:"Wed",value:50},

{name:"Thu",value:42},

{name:"Fri",value:60},

{name:"Sat",value:70},

{name:"Sun",value:90}

];

function UsageChart(){

return(

<div className="bg-slate-900 rounded-xl p-6">

<h2 className="text-xl mb-5">

Weekly AI Usage

</h2>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line

type="monotone"

dataKey="value"

stroke="#06b6d4"

strokeWidth={3}

/>

</LineChart>

</ResponsiveContainer>

</div>

);

}

export default UsageChart;