import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let hello = "<b>Harry</b>";
function App() {
  return (
    <>
    <Navbar title = "REACT" aboutText ="about REACT-utiles"/>
    <div className='container my-3'>
    <TextForm heading = "Enter the text to analyze"/>
    </div>
    </>
  );

}

export default App;
