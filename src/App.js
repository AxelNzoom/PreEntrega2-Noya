
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import "bulma/css/bulma.css";

function App() {
    return (
        <div className="App">

            <NavBar />


            <ItemListContainer greeting= {'Bienvenidos'}/>


        </div>
    )
}


export default App;