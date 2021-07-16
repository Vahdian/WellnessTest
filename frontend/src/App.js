import Routes from './core/Routes/Routes';
import {useState } from 'react';
import { Loading } from './core/components/Loader/Loading.jsx';
import { LoadingContext } from './core/components/Loader/context/LoadingContext';
import {BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <div>
     <BrowserRouter>
     <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        <Loading></Loading>
        <Routes></Routes>
        </LoadingContext.Provider>
     </BrowserRouter>
    </div>
  );
}

export default App;
