import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <Container>
      {loading && <h3>loading.....</h3>}
      {error && <h3>Error happened. Try later</h3>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
