import './App.css';
import Inputs from './components/inputs/inputs';
import Output from './components/output/output';
import Buttons from './components/buttons/buttons'

function App() {
  return (
    <div className="applayer">
     <Inputs/>
     <Output/>
     <Buttons/>
    </div>
  );
}

export default App;
