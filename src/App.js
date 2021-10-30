import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>

      </AuthProvider>
    </div>
  );
}

export default App;
