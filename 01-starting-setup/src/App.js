import DisplayCats from "./components/DisplayCatsComponent";
import NewCat from "./components/CatForm/NewCat";

const cats = [
  {
    id: "el1",
    name: "Leo",
    date: new Date(2022, 11, 5)
  },
  {
    id: "el2",
    name: "Leon",
    date: new Date(2023, 4, 1)
  },
  {
    id: "el3",
    name: "Puszek",
    date: new Date(2022, 8, 15)
  }
]

function App() {
  return (
    <div>
      <NewCat />

      <DisplayCats cats={cats} />
    </div>
  );
}

export default App;
