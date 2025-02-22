import { Button } from './components/Button/Button';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
        <Button>Click me</Button>
    </div>
  );
}

export default App;
