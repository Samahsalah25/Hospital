
import { FaHospital } from 'react-icons/fa';
import OccupancyProgress from "./OccupancyProgress";
import StatBlock from "./StatBlock";
import ICUProgressGroup from "./ICUProgressGroup";
import { IoMdHeart } from 'react-icons/io';

export default function Card({ hospital }) {
  const colors = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="rounded-lg p-4 shadow bg-white space-y-4 border border-gray-200 h-full grid grid-cols-[auto_1fr_1fr] gap-4 "  >
      {/* العمود الأول: اسم المستشفى */}
    
         <div
        className={`flex flex-col justify-center items-center gap-3 p-2 ${colors[hospital.color]}`} 
        style={{ backgroundColor: colors[hospital.color] }} // التأكد من ظهور اللون الخلفي
      >
        {/* اسم المستشفى مائل 270 درجة */}
        <h2 className="font-bold text-base transform rotate-270 text-white ">{hospital.name}</h2>
        
        <div 
          className="text-white text-2xl font-bold transform rotate-270 border-2 border-white w-8 h-8 flex justify-center items-center"
        >
          H
        </div>
      </div>
      {/* العمود الثاني: نسبة الإشغال */}
      <div className="grid grid-rows-2 gap-2 w-full">
        {/* الصف الأول: نسبة الإشغال */}
        <div className="w-full">
          <OccupancyProgress rate={hospital.occupancyRate} color={hospital.color} />
        </div>

        {/* الصف الثاني: StatBlocks (Total, Vacant, Occupied) */}
        <div className="flex justify-between gap-1 w-full">
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
