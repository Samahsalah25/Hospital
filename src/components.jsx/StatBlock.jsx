export default function StatBlock({ label, value }) {
    return (
      <div className="flex flex-col items-center bg-gray-100 rounded p-1 w-16">
        <div className="text-[10px] text-gray-500">{label}</div>
        <div className="text-sm font-bold text-gray-800">{value}</div>
      </div>
    );
  }
  