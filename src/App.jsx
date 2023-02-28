import { useRoutes } from 'react-router-dom';
import './App.css'
import appRoute from './routes/app.route';

function App() {

  const routes = useRoutes(appRoute);

  return (
    <div className="App">
      <nav>
        NavBar...
      </nav>
      <main>
        {routes}
      </main>
    </div>
  )
}

export default App
