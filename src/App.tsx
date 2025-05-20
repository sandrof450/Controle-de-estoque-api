import MenuLateral from './components/MenuLateral';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MenuLateral />
      <div className="dashboard-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;