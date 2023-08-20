import './App.css';
import {Header} from './components/Header'
import Baner from './components/Baner';
import ProgressBar from './components/ProgressBar';
import FormInput from './components/FormInput';
import FormQuality from './components/FormQuality';
import FormStyle from './components/FormStyle';
import GetInspired from './components/GetInspired';

function App() {
  return (
    <div className="App">
      <Header />
      <Baner />
      <ProgressBar />
      <FormInput />
      <FormQuality />
      <FormStyle />
      <GetInspired />
    </div>
  );
}

export default App;
