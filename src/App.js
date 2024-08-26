import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './Component/Home';
import Form from './Component/Form';
import EditDetails from './Component/EditDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='Form' element={<Form/>}/>
       <Route path='/:id' element={<EditDetails/>}/>
        
      </Routes>
    
      
    </div>
  );
}

export default App;
