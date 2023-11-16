import './App.css';
import News from './components/news/News';
import SearchBar from './components/searchBar/SearchBar';
import Advertising from './components/advertising/Advertising';
import Widgets from './components/widgets/Widgets';

function App() {
  return (
    <>
      <News />
      <SearchBar />
      <Advertising />
      <Widgets/>
    </>
  );
}

export default App;
