import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateDishes from './CreateDishes';
import CreateRestraunt from './CreateRestraunt';
import ListDishes from './ListDishes';
import ListRestraunt from './ListRestraunts';
import Login from './Login';
import logo from './logo.svg';
import Portal from './Portal';
// import './App.css';
import './sb-admin-2.min.css'
import Zomato from './Zomato';

function App() {
  return (
<BrowserRouter>
  <Routes>

  <Route path='/' element={<Zomato/>}/>


    <Route path='/zomato' element={<Login/>}/>

    <Route path='/zomato/portal' element={<Portal/>}>
      <Route path='list-restraunts' element={<ListRestraunt/>}/> 
      <Route path='create-restraunts' element={<CreateRestraunt/>}/> 
      <Route path='list-dishes/:rId' element={<ListDishes/>}/> 
      <Route path='create-dishes/:rId' element={<CreateDishes/>}/> 
    </Route>
   
   </Routes>
 </BrowserRouter>
  )
}
  

export default App;
