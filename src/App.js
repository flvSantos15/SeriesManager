import Header from './Header';
import Generes from './Generes';
import NovoGenero from './NovoGenero';
import EditarGenero from './EditarGenero';
import Series from './Series';
import NovaSerie from './NovaSerie';
import InfoSerie from './InfoSerie';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/generes' exact component={Generes}/>
          <Route path='/generes/novo' exact component={NovoGenero}/>
          <Route path='/generes/:id' exact component={EditarGenero}/>
          <Route path='/series' exact component={Series}/>
          <Route path='/series/novo' exact component={NovaSerie}/>
          <Route path='/series/:id' exact component={InfoSerie}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
