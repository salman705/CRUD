
//import { configure } from '@testing-library/dom';
import './App.css';
import PostContainer from './Container/PostContainer';
//import AsyncAction from './Container/AsyncAction';
import GetContainer from './Container/UserContainer';

function App() {
 

  return (
    <div className="App">
      Redux Introduction
<GetContainer/>
<PostContainer/>
     </div>
  );
}

export default App;
