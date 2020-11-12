import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './Searchpage.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <Sidebar />
            <SearchPage />
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
