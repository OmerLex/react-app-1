
import './App.css';
import img from "./img/cake1.jpg"
import Title from './components/Title';
import MenuItems from './components/MenuItems';

// function Title(){
//   return(
//     <h1>Hello React from Title Component</h1>
//   )
// }

// const Title = () => {
//   return(
//     <h1>Hello React from Title Component</h1>
//   )
// }

function App() {
  const firstName = "John";
  let lastName = "Doe";
  const x = true;
  const imageUrl = 'https://picsum.photos/seed/picsum/400/400';
  return (
    <div className="App">
      <MenuItems />
      <Title />
      <h1>Hello React!!!</h1>
      <h2>Hello {firstName} {lastName} </h2>
      <h2>{x ? 'Yes' : 'No'}</h2>
      {/* <img src={img} alt="cake1" /> */}
      <img src={imageUrl} alt="" />
      
    </div>
  );
}

export default App;
