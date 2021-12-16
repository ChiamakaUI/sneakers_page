// import './App.css';
import Description from './Components/Description';
import Navbar from './Components/Navbar';
import ProductImages from './Components/ProductImages';
import "./Components/style.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='product'>
        <ProductImages/>
        <Description />
      </div>
    </div>
  );
}

export default App;
