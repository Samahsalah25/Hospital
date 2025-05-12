
import OccupancyProgress from "./OccupancyProgress";
import StatBlock from "./StatBlock";
import ICUProgressGroup from "./ICUProgressGroup";

export default function Card({ hospital }) {
  const colors = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="rounded-lg p-4 shadow bg-white space-y-4 border border-gray-200 h-full grid grid-cols-[auto_1fr_auto] gap-4">
      {/* العمود الأول: اسم المستشفى */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-10 ${colors[hospital.color]} rounded`}></div>
        <h2 className="font-bold text-base">{hospital.name}</h2>
      </div>

      {/*العمود الثاني:ل */}
      <div className="grid grid-rows-2 gap-4">
      
        <div className="flex justify-center items-center">
          <OccupancyProgress rate={hospital.occupancyRate} color={hospital.color} />
        </div>

        {/* الصف الثاني: StatBlocks (Total, Vacant, Occupied) */}
        <div className="flex justify-between gap-1">
          <StatBlock label="Total" value={hospital.totalBeds} />
          <StatBlock label="Vacant" value={hospital.vacantBeds} />
          <StatBlock label="Occupied" value={hospital.occupiedBeds} />
        </div>
      </div>

      {/* العمود الثالث: بيانات ICU */}
      <div className="flex justify-center items-center">
        <ICUProgressGroup icuData={hospital.icuData} />
      </div>
    </div>
  );
}
