import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Subscribe from './Components/Subscribe.js';
import Stylesheet from './Components/Stylesheet.js';
import InlineStyle from './Components/inlineStyle.js';
import CSSModule from './Components/CSSModule.js';
import Counter from './Components/Counter.js';
import Student from './Components/Student.js';
function App() {
  return (
    <div className="App">
    <h1 className="leadersboardHeading">LeadersBoard</h1>
   <Student name="John Doe" university="NUST University" scores={349}/>
   <Student name="Shahzaib Khan" university="NED University" scores={347}/>
   <Student name="Kamran Ahmad" university="UET Lahore" scores={345}/>
   <Student name="Zahid Khan" university="GC University" scores={344}/>
   <Student name="Shaid Khan" university="FAST Lahore" scores={343}/>
   <Student name="Muhammad Ahmad" university="LUMS University" scores={341}/>
   
    </div>
  );
}

export default App;
