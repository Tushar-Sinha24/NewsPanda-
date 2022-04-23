import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";





function App() {
  const apiKey="0f422d94684048759b3ae0f2ed13f3fb";
  
  return (
    <>

    <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/*' element={<News pageSize={18} category="general" apiKey={apiKey} country ="in"/>}  />
      <Route path='/business' element={<News pageSize={18} category="business" apiKey={apiKey} country ="in"/>}  />
      <Route path='/entertainment' element={<News pageSize={18} category="entertainment" apiKey={apiKey} country ="in"/>}  /> 
      <Route path='/general' element={<News pageSize={18} category="general" apiKey={apiKey} country ="in"/>} /> 
      <Route path='/health' element={<News pageSize={18} category="health" apiKey={apiKey} country ="in"/>} />
      <Route path='/science' element={<News pageSize={18} category="science" apiKey={apiKey} country ="in"/>} />
      <Route path='/sports' element={<News pageSize={18} category="sports" apiKey={apiKey} country ="in"/>}  /> 
      <Route path='/technology' element={<News pageSize={18} category="technology" apiKey={apiKey} country ="in"/>}  />
    </Routes>
    </Router>
    </>
  );
}

export default App;
