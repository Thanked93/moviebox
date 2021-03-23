import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Browse from "./pages/browse/Browse";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Settings from "./pages/settings/Settings";
import Error from "./pages/Error";
import { AccountState } from "./store/account/accountReducer";
import { IntlProvider } from "react-intl";
import english from "./fixtures/languages/English.json";
import german from "./fixtures/languages/German.json";

function App() {
  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );

  const [messages, setMessages] = useState(english);

  useEffect(() => {
    setMessages(lang === "de-DE" ? german : english);
  }, [lang, setMessages]);

  return (
    <IntlProvider locale={lang} messages={messages}>
      <Router>
        <Navbar />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Home} exact path="/home" />

          <Route component={Home} path="/movies" />
          <Route component={Home} path="/series" />

          <Route component={Profile} path="/profile" />
          <Route component={Browse} path="/browse" />
          <Route component={Settings} path="/settings" />
          <Route component={Error} path="" />
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
