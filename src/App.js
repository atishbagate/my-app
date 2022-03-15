 
import './App.css';
import Flexbox1 from './topics/flexbox'
import Navbar from './topics/navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
            <h1 className="text-5xl font-bold underline">
      This is the Course to use Tailwind Css inside React.js
    </h1>
    {/* flexbox  */}
    <Flexbox1 />
    </div>
  );
}

export default App;
