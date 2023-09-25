import './App.css'

const App = ():JSX.Element => {
  return (
    <>
      <h1 className="text-center font-bold font-impact">Color Markers</h1>
      <div className="container pt-2.5 pb-2.5 pl-0 pr-0">
        <div className="marker shadow-md shadow-black ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-gradient-to-b from-red-800 via-red-600 to-red-800">
          <div className="cap w-14 h-6 inline-block"></div>
          <div className="sleeve bg-white opacity-50 w-32 h-6 inline-block border-l-black border-l-8 border-double"></div>
        </div>
        <div className="marker shadow-md shadow-black ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-gradient-to-b from-green-800 via-green-600 to-green-800">
          <div className="cap w-14 h-6 inline-block"></div>
          <div className="sleeve bg-white opacity-50 w-32 h-6 inline-block border-l-black border-l-8 border-double"></div>
        </div>
        <div className="marker shadow-md shadow-black ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800">
          <div className="cap w-14 h-6 inline-block"></div>
          <div className="sleeve bg-white opacity-50 w-32 h-6 inline-block border-l-black border-l-8 border-double"></div>
        </div>
      </div>
    </>
  );
};

export default App;
