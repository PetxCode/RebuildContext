import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Start from "./Arrange/Start";
// import { AppProvider } from "./Arrange/Context/AppState";
import Feed from "./Arrange/Feed";
import { AppProvider } from "./Arrange/ContextAPI/TheContext";
import AddScreen from "./Arrange/CRUD/AddUser";
import EditScreen from "./Arrange/CRUD/EditScreen";
import HomeScreen from "./Arrange/CRUD/HomeScreen";
import HomeDesign from "./NewClass/HomeDesign";
import EditDesign from "./NewClass/EditDesign";
import AddDesign from "./NewClass/AddDesign";
import { GlobalProvider } from "./NewClass/ContextFile/GlobalContext";
function App() {
  return (
    <div>
      {" "}
      <GlobalProvider>
        <AppProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Start} />
              <Route exact path="/newHome" component={HomeDesign} />
              <Route exact path="/adding" component={AddDesign} />
              <Route exact path="/editing/:id" component={EditDesign} />
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/add" component={AddScreen} />
              <Route exact path="/edit/:id" component={EditScreen} />
              <Route exact path="/home" component={HomeScreen} />
            </Switch>
          </Router>{" "}
        </AppProvider>{" "}
      </GlobalProvider>
    </div>
  );
}

export default App;
