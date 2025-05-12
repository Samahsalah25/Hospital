
import { FaHospital } from 'react-icons/fa';
import OccupancyProgress from "./OccupancyProgress";
import StatBlock from "./StatBlock";
import ICUProgressGroup from "./ICUProgressGroup";
import { IoMdHeart } from 'react-icons/io';
import { FaBed, FaCheckCircle } from "react-icons/fa";
export default function Card({ hospital }) {
  const colors = {
    gray: "bg-[#333333]",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="rounded-lg p-4  bg-transparent space-y-4  h-full grid grid-cols-[auto_1fr_1fr] gap-2 "  >
      {/* العمود الأول: اسم المستشفى */}
    
         <div
        className={`flex flex-col justify-center align-center items-center gap-1 p-1 rounded ${colors[hospital.color]} h-full w-12`} 
        style={{ backgroundColor: colors[hospital.color] }} // التأكد من ظهور اللون الخلفي
      >
        {/* اسم المستشفى مائل 270 درجة */}
        <h2 className="font-bold text-base transform rotate-270 text-white flex justify-center align-center ">{hospital.name}</h2>
        
        <div 
          className="text-white text-2xl font-bold transform rotate-270  w-8 h-10 flex justify-center items-center "
        >
          {hospital.icon}
        </div>
      </div>
      {/* العمود الثاني: نسبة الإشغال */}
      <div className="grid grid-rows-2  w-full h-full">
        {/* الصف الأول: نسبة الإشغال */}
        <div className="w-full ">
          <OccupancyProgress rate={hospital.occupancyRate} color={hospital.color} />
        </div>

        {/* الصف الثاني: StatBlocks (Total, Vacant, Occupied) */}
        <div className="flex justify-between  w-full">
          <StatBlock label="Total" value={hospital.totalBeds}  color={hospital.color}   icon={<FaBed className="text-white" />} />
          <StatBlock label="Vacant" value={hospital.vacantBeds}  color={hospital.color}   icon={<FaBed className="text-white" />} />
          <StatBlock label="Occupied" value={hospital.occupiedBeds}  color={hospital.color}  icon={<FaBed className="text-white " />} />
        </div>
      </div>

      {/* العمود الثالث: بيانات ICU */}
      <div className="flex justify-center items-center">
        <ICUProgressGroup icuData={hospital.icuData} color={hospital.color} />
      </div>
    </div>
  );
}


