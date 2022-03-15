   

function App() {
  return (
    <div className="App">
            <h1 className="text-2xl font-bold underline">
      This is the Course to use Flexbox using Tailwind Css inside React.js
    </h1>
    {/* <div className="h-80 flex flex-col justify-around items-center">
        <div className="p-2 bg-blue-200">Block1 block content</div>
        <div className="p-2 bg-red-200">Block2 block content</div>
        <div className="p-2 bg-green-200">Block3 block content</div>
        <div className="p-2 bg-yellow-200">Block4 block content</div>
    </div> */}
    <div className="h-80 bg-gray-200 flex flex-wrap justify-center content-center self-end">
        <div className="p-2 bg-blue-200">Block1 block content block content</div>
        <div className="p-2 bg-red-200">Block2 block content block content</div>
        <div className="p-2 bg-green-200">Block3 block content</div>
        <div className="p-2 bg-yellow-200">Block4 block content</div>
    </div>
    </div>
  );
}

export default App;
