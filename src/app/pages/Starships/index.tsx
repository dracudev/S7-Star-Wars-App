import { Card } from "../../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { fetchStarships } from "../../../redux/starshipSlice";
import { v4 as uuidv4 } from "uuid";

export default function Starships() {
  const dispatch = useDispatch<AppDispatch>();
  const starships = useSelector((state: RootState) => state.starship.starships);
  const nextPage = useSelector((state: RootState) => state.starship.nextPage);
  const loading = useSelector((state: RootState) => state.starship.loading);

  const fetchNextPage = async () => {
    if (nextPage) {
      dispatch(fetchStarships(nextPage));
    }
  };

  return (
    <div>
      {starships.length > 0 ? (
        <>
          {starships.map((starship) => (
            <Card key={uuidv4()}>
              <h2>{starship.name}</h2>
              <h3>{starship.model}</h3>
            </Card>
          ))}
          {nextPage && (
            <button onClick={fetchNextPage} disabled={loading}>
              {loading ? "Loading..." : "View More"}
            </button>
          )}
        </>
      ) : (
        <p>Loading starships...</p>
      )}
    </div>
  );
}
