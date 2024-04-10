import "./App.css";
import "./stylesheets/theme_nebula.css";
import CalendarHeader from "./components/CalendarHeader";
import CalendarList from "./components/CalendarList";

function App() {

  return (
    <div className="App">
      <CalendarHeader />
      <CalendarList />
    </div>
  );
}

export default App;
