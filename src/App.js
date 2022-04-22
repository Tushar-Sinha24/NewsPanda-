import './App.css';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>

    <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/*' element={<News pageSize={18} category="general" country ="in"/>}  />
      <Route path='/business' element={<News pageSize={18} category="business" country ="in"/>}  />
      <Route path='/entertainment' element={<News pageSize={18} category="entertainment" country ="in"/>}  /> 
      <Route path='/general' element={<News pageSize={18} category="general" country ="in"/>} /> 
      <Route path='/health' element={<News pageSize={18} category="health" country ="in"/>} />
      <Route path='/science' element={<News pageSize={18} category="science" country ="in"/>} />
      <Route path='/sports' element={<News pageSize={18} category="sports" country ="in"/>}  /> 
      <Route path='/technology' element={<News pageSize={18} category="technology" country ="in"/>}  />
    </Routes>
    </Router>
    </>
  );
}

export default App;
