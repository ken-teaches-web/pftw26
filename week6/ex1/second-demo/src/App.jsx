import "./App.css";
function App() {
  // all your JavaScript logic above the return statement
  const myAge = 55;
  const name = "Ken";
  const chihuahuaFacts = [
    "Chihuahua's only like 1 or 2 people at time",
    "Chihuahua's do a lot of shaking for no reason",
    "Chihuahua's think they are bigger than they are",
    "Chihuahua's can be trained to fetch",
    "Chihuahua's can not be trained to fetch"
  ]
  const canFetch = false;
  //ternerary:  condtion ? true value : false value

  // condtions
  // Way 1 - ternary on var or in curly brackets
  // Way 2 - double ampersand in curly brackets -- right side of ampersands
  // gets displayed if true
 

  return (
   <div>
    <h1>Chihuahua Facts</h1>
    <ul>
      <li>{chihuahuaFacts[0]}</li>
      <li>{chihuahuaFacts[1]}</li>
      <li>{chihuahuaFacts[2]}</li>
      <li>{canFetch ? chihuahuaFacts[3] : chihuahuaFacts[4]}</li>

    </ul>
   </div>
  )
}

export default App
