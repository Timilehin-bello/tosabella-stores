import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Tosabella Stores </h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
