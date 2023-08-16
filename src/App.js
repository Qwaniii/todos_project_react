import './App.css';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Text from './components/text field/Text';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <main className="App-main">
        <Text/>
        <Tasks/>
      </main>
    </div>
  );
}

export default App;
