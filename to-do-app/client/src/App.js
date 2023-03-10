import ListHeader from "./components/ListHeader";
import { useEffect } from "react";

const App = () => {
  const user_email = "nrenuja@gmail.com";
  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${user_email}`);
      const jasonData = await response.json();
      console.log(jasonData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <ListHeader listName={"🏝️ Holiday check list"} />
    </div>
  );
};

export default App;
