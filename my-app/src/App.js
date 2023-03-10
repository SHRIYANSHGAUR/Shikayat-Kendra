
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './Component/NoteList';
import CreateNote from './Component/CreateNote';
import UpdateNote from './Component/UpdateNote';
import Index from './Component/Index';
function App() {
  return (
    <div>
      <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path='/' exact element={<Index/>}></Route>
        <Route path='/notes' element={ <List />}></Route>
        <Route path='/add' element={ <CreateNote />}></Route>
        <Route path='/update/:id' element={ <UpdateNote />}></Route>
    
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
