import { useState, useEffect } from "react";
import CardList from "./Components/CardList";
import Spinner from "./Components/Spinner";

function App() {
  const [myUsers, setMyUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mountedComponent = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (mountedComponent) {
        setMyUsers(await response.clone().json());
        setLoading(false);
      }
      return () => {
        mountedComponent = false;
      };
    };
    getProducts();
  }, []);

  return (
    <div className="grid grid-flow-row w-[100%] h-[100%] xl:p-10 lg:p-5 justify-items-center font-sansSerif">
      {loading ? <Spinner /> : <CardList myUsers = {myUsers}/>}
    </div>
  );
}

export default App;
