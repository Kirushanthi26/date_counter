const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 w-3/4 rounded-lg py-8 px-36">
        <div className="flex justify-between space-x-4">
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
            1
          </div>
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
            2
          </div>
          <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center">
            3
          </div>
        </div>
        <div>
          <p className="text-center font-semibold text-2xl py-10">Note</p>
        </div>
        <div className="flex justify-between items-end">
          <button className="capitalize font-medium bg-purple-700 text-white rounded-3xl py-3 px-8">
            previous
          </button>
          <button className="capitalize font-medium bg-purple-700 text-white rounded-3xl py-3 px-8">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
