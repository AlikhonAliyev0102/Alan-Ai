import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart";

function App() {
  
  return (
    <div className="App">
      <ToastContainer/>
      <Cart/>

    </div>
  );
}

export default App;
