import './App.css';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import HomePage from './components/Homepage';
import Alert from './components/alert';
import ChartComponent from './components/chart';



function App() {
  return (



    
    <BrowserRouter>
    <div className="flex">
    <Sidebar />
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route path="/alerts" element={<Alert/>}/>
      <Route path="/chart" element={<ChartComponent/>}/>
      </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
