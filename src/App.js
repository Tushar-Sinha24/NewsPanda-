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
      <Route path='/'><News pageSize={18} category="general" country ="in"/></Route>
      <Route path='/business'><News pageSize={18} category="business" country ="in"/></Route>
      <Route path='/entertainment'><News pageSize={18} category="entertainment" country ="in"/></Route> 
      <Route path='/general'><News pageSize={18} category="general" country ="in"/></Route>  
      <Route path='/health'><News pageSize={18} category="health" country ="in"/></Route>
      <Route path='/science'><News pageSize={18} category="science" country ="in"/></Route>
      <Route path='/sports'><News pageSize={18} category="sports" country ="in"/></Route>
      <Route path='/technology'><News pageSize={18} category="technology" country ="in"/></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
