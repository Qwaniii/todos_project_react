import './App.css';
import Tasks from './components/Tasks/Tasks';
import Text from './components/text field/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text/>
        <Tasks/>
      </header>
    </div>
  );
}

export default App;
