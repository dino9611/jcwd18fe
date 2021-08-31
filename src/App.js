import React, { Component } from "react";
import { Header } from "./components";
import Home from "./pages/Home";
import PageLain from "./pages/pageLain";
import NotFound from "./pages/NotFound";
import Resep from "./pages/resep";
import { Switch, Route } from "react-router-dom";
import HitungKata from "./pages/hitungkata";

class App extends Component {
  state = {
    kata: "budi",
  };

  gantikata = (nama) => {
    this.setState({ kata: nama });
  };

  render() {
    return (
      <div>
        {/*  Routing Navigation */}

        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/page" component={PageLain} />
          <Route path="/hitungkata" component={HitungKata} />
          <Route path="/resep" component={Resep} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
