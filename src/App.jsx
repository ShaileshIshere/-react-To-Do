import './App.css'
import Button from './button.jsx';
import LikeButton from './likeButton.jsx';
import LudoBoard from './ludoBoard.jsx';
import ToDoList from './ToDoList.jsx';
// import Lottery from './oldLogic/Lottery.jsx';
import Lottery from './newBetterLogic/Lottery.jsx';

function App() {
  return (
    <>
      {/* <h1>react states</h1> */}

      {/* <Button /> */}
      {/* <LikeButton /> */}

      {/* <LudoBoard /> */}

      {/* <ToDoList /> */}

      {/* <Lottery /> */}

      <Lottery n={3} winningSum={15} />
    </>
  )
}

export default App
