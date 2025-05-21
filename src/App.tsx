import MenuLateral from './components/MenuLateral';
import Dashboard from './components/Dashboard';
import './App.css';
import { useEffect, useState} from 'react';

function App() {
  const [expandirMenuLateral, setExpandirMenuLateral] = useState<Boolean | false>(false);

  return (
    <div className="container-geral">
      <MenuLateral 
        expandirMenuLateral={expandirMenuLateral}
        setExpandirMenuLateral={setExpandirMenuLateral} />
      <div className={`container-dashboard ${expandirMenuLateral === true? 'expandir': ''}`}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;