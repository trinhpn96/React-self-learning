import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import NfContainer from "./Components/NfContainer";
import StoryList from "./Components/StoryList";

const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <StoryList />
      <hr />
      <NfContainer />
      <hr />
      <Navbar />
    </div>
  );
};

export default App;
