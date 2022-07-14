import axios from "axios";
import useFetch from "./../hooks/useFetch";

const Practice = () => {
  const { data, loading, error, handleFetch } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka"
  );

  // console.log(data, loading, error);
  if (loading) <h1>Loading...</h1>;
  if (error) console.log(error);
  return (
    <div>
      {/* {!loading ? console.log(data) : null} */}
      

      {!loading &&
        data.drinks.map((data, index) => {
          return (
            <div key={index}>
              <div>{data.strDrink}</div>
            </div>
          );
        })}

      <button onClick={handleFetch}>Refetch</button>
    </div>
  );
};

export default Practice;
