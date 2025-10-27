import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div style={{ flexDirection: "row", flex: 1, display: "flex" }}>
      <Sidebar style={{ color: "red" }} />
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
