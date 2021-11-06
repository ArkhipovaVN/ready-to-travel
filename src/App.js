import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import './variables.scss'
import './reset.scss'
import 'antd/dist/antd.css'



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path='/'>Главная страница</Route>
        <Route path='/countries'>
          <div>Твоя страна тут</div>
        </Route>
        <Route path='/check-list'>
          <div>Чек лист путешественика</div>
        </Route>
      </div>
    </Router>
  );
}

export default App;

