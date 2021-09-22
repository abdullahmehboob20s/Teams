import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import CommunitySettings from "pages/CommunitySettings/CommunitySettings";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/community-settings"
            component={CommunitySettings}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
