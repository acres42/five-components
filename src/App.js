import Button from './components/Button';
import DisplayCard from './components/DisplayCard';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <Navbar bgColor="black" shadow="redDrop" btnColor="white" hoverColor="emerald-600"/>
      <div className="flex">
        <div className="flex-1">
          <Button size="sm" textColor="red-500" bgColor="white" shadow="redDrop" hover="bg-emerald-500 hover:text-white">Donnatron</Button>
          <Button size="sm" textColor="black" bgColor="white" shadow="blackDrop" hover="bg-red-500 hover:text-white">Donnatron 2</Button>
        </div>
        <div className="flex-1">
          <DisplayCard bgColor="white" textColor="red-500" shadow="redDrop" hover="bg-emerald-500 hover:text-white"/>
          <DisplayCard bgColor="white" textColor="black" shadow="blackDrop" hover="bg-red-500 hover:text-white"/>
        </div>
        <div className="flex-1">
          <Dropdown bgColor="white" textColor="red-500" shadow="redDrop"/>
          <Dropdown bgColor="white" textColor="red-500" shadow="blackDrop"/>
        </div>
        <div className="flex-1">
          <Carousel bgColor="white" shadow="redDrop"/>
          <Carousel bgColor="white" shadow="blackDrop"/>
        </div>
      </div>
    </div>
  );
}

export default App;
