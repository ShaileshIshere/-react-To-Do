import './App.css'
import Button from './buttons/button.jsx';
import LikeButton from './buttons/likeButton.jsx';
import LudoBoard from './ludoBoard.jsx';
import ToDoList from './ToDoList.jsx';
// import Lottery from './oldLogic/Lottery.jsx';
import Lottery from './newBetterLogic/Lottery.jsx';
import Forms from './forms/Forms.jsx';
import CommentsForm from './comments/CommentsForm.jsx';

function App() {
  return (
    <>
      {/* <h1>react states</h1> */}

      {/* <Button /> */}
      {/* <LikeButton /> */}

      {/* <LudoBoard /> */}

      {/* <ToDoList /> */}

      {/* <Lottery /> */}

      {/* <Lottery n={3} winningSum={15} /> */}

      <Forms />

      {/* <CommentsForm /> */}
    </>
  )
}

export default App
