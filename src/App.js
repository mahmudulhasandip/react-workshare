import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar />

        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/create/project' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signup' component={SignUp} />
          <Route path='/signin' component={SignIn} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
