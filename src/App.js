import './App.css';
import SelectedTeam from './components/SelectedTeam/SelectedTeam';
import TeamList from './components/TeamList/TeamList';
import { Provider } from 'react-redux'
import store from './redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <main className="App">
        <h1>Team Manager</h1>
        <TeamList />
        <SelectedTeam />
      </main>
    </Provider>
  );
}

export default App;
