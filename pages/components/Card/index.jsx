export default function Card() {
  return (
    <div className="p-6 max-w-sm bg-gray-700 rounded-xl shadow-xl flex items-center space-x-4 m-2 flex-auto">
      <div className="flex-shrink-0">
        <img className="h-20 w-20 rounded-full" src="http://www.fillmurray.com/200/200" alt="ChitChat Logo" />
      </div>
      <div>
        <div className="text-xl font-medium text-yellow-500">Daryl Findlay</div>
        <p className="text-yellow-200">Welcome to my protfolio!</p>
      </div>
    </div>
  );
}
