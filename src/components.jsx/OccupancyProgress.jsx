export default function OccupancyProgress({ rate, color }) {
    const colors = {
      gray: "bg-gray-500",
      red: "bg-red-500",
      green: "bg-green-500",
      yellow: "bg-yellow-500",
    };
  
    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Occupancy Rate</span>
          <span>{rate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${colors[color]} h-2 rounded-full`}
            style={{ width: `${rate}%` }}
          ></div>
        </div>
      </div>
    );
  }
  