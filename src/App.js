import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const items = [{title: 'Title 1', description: 'Description 1'}, {title: 'Title 2', description: 'Description 2'}];
  return (
    <div className="App">
      <header className="App-header">
      <h1>react-course-2-2</h1>
      {items.map((item, index) => (<Card key={index} title={item.title} description={item.description} />))}
      </header>
      
    </div>
  );
}

export default App;
