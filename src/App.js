import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import TeamManager from './components/TeamManager/TeamManager';


const App = () => {
  return (
    <Provider store={store}>
      <main className="App">
        <h1>Team Manager</h1>
        <TeamManager />
      </main>
    </Provider>
  );
}

export default App;
