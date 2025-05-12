
export default function OccupancyProgress({ rate, color }) {
  // RGB قيم الألوان للأنواع المختلفة
  const colorRGB = {
    gray: [107, 114, 128],
    red: [248, 113, 113],
    green: [34, 197, 94],
    yellow: [234, 179, 8],
  };

  const rgb = colorRGB[color]; // [R, G, B]

  return (
    <div
      className="rounded p-2 space-y-6 text-white "
      style={{
        backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.3)`,
     
      }}
    >
      <div className="flex justify-between text-xs text-white">
        <span>Occupancy Rate</span>
        <span>{rate}%</span>
      </div>
      <div
        className="w-full rounded-full h-2"
        style={{
          backgroundColor: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)`, 
        }}
      >
        <div
          className="h-2 rounded-full"
          style={{
            width: `${rate}%`,
            backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`, 
          }}
        ></div>
      </div>
    </div>
  );
}
