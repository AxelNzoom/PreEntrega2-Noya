
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css";


function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>404 ERROR</h1>}/>
                    <Route/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;