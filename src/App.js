import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { Switch, Route } from "react-router-dom";
import MarketsListContainer from "./components/MarketsListContainer";
import NavBarContainer from "./components/NavBarContainer";
import MarketDetailsContainer from "./components/MarketDetailsContainer";
import AddMarketContainer from "./components/AddMarketContainer";
import MapContainer from "./components/MapContainer";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavBarContainer />
        <Switch>
          <Route path="/market/:marketId" component={MarketDetailsContainer} />
          <Route path="/add-market" component={AddMarketContainer} />
          <Route path="/map" component={MapContainer} />
          <Route path="/" component={MarketsListContainer} />
        </Switch>
        <Footer />
      </Provider>
    );
  }
}

export default App;
