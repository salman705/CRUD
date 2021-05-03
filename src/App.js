
//import { configure } from '@testing-library/dom';
import './App.css';
import AsyncAction from './Container/AsyncAction';
import GetContainer from './Container/UserContainer';

function App() {
 

  return (
    <div className="App">
      Redux Introduction
<GetContainer/>
<AsyncAction/>
     </div>
  );
}

export default App;
