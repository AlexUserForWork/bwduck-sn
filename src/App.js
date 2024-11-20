import logo from './logo.svg';
import './App.css';
import heroDuck from './hero-duck1.png';
import duckV from './Comp 1_1.mp4';

function App() {
   return (
      <div className='App'>
         <video className='main-img' id='introVideo' width='800' autoplay=''>
            <source src={duckV} type='video/mp4' />
            Video doesn't work because you sniffed too much glue.
         </video>
         <p className='main-text'>COMING SOON</p>
      </div>
   );
}

export default App;
