import StatBlock from "./StatBlock";

export default function ICUProgressGroup({ icuData }) {
  const colors = {
    ICU: "bg-yellow-500",
    CCU: "bg-red-500",
    NuroICU: "bg-green-500",
  };

  return (
    <div className="space-y-3">
      {icuData.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-2">
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-600 mb-1">
              <span>{item.label}</span>
              <span>{item.rate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${colors[item.label]} h-2 rounded-full`}
                style={{ width: `${item.rate}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-1">
            <StatBlock label="Total" value={item.total} />
            <StatBlock label="Vacant" value={item.vacant} />
          </div>
        </div>
      ))}
    </div>
  );
}
