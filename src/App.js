import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
