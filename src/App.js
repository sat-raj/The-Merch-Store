import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App=()=> {
  return (
    <div >
    <Home/>
    <ProductList/>
    <Product/>
    <Login/>
    <Register/>
    </div>
  );
}

export default App;
