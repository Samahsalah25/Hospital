
export default function StatBlock({ label, value, color, opacity = 0.3  ,icon}) {
  const colors = {
    gray: [107, 114, 128],   
    red: [248, 113, 113],    
    green: [34, 197, 94],   
    yellow: [234, 179, 8],  
  };

  const rgb = colors[color] || [229, 231, 235]; 

  return (
    <div
      className="flex flex-row items-center rounded p-1 w-19 rounded gap-2 justify-center align-center"
      style={{
        backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`,
      }}

    >
      <div className={`flex items-center  ${rgb}} w-10 h-10 text-xl justify-center align-center rounded`} style={{
          backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`,  
        }}>{icon}</div>
     <div className="flex flex-col">
     <div className="text-[10px] text-gray-500 text-white">{label}</div>
     <div className="text-sm font-bold text-gray-800 text-white">{value}</div>
     </div>
    </div>
  );
}
