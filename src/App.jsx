import { useRoutes } from 'react-router-dom';
import './App.css'
import NavBar from './containers/nav-bar/nav-bar';
import appRoute from './routes/app.route';

function App() {

  const routes = useRoutes(appRoute);

  return (
    <div>
      <NavBar />
      <main className="App">
        {routes}
      </main>
    </div>
  )
}

export default App
