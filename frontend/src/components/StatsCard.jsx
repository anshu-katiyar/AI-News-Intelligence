function StatsCard({ title, value, color }) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 ${color} text-white hover:scale-105 transition duration-300`}
    >
      <h3 className="text-lg">{title}</h3>

      <p className="text-4xl font-bold mt-3">{value}</p>
    </div>
  );
}

export default StatsCard;