import Routes from './core/Routes/Routes';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes></Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
