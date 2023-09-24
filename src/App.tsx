import './App.css'

const App = ():JSX.Element => {
  return (
    <>
      <h1 className="text-center">CSS Color Markers</h1>
      <div className="container">
        <div className="marker ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-red-600"></div>
        <div className="marker ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-green-600"></div>
        <div className="marker ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 bg-blue-600"></div>
      </div>
    </>
  );
};

export default App;
