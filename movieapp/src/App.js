import React, { useState } from 'react'
import axios from 'axios'
import MovieList from "./components/MovieList"
import Search from './components/SearchBox'
import Results from './components/Results'
import Info from './components/Info'
import SimpleBottomNavigation from "./components/MainNav"
function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=a528b20b";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openInfo = id => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closeInfo = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>  Movies  </h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openInfo={openInfo} />
        < SimpleBottomNavigation />
        {(typeof state.selected.Title != "undefined") ? <Info selected={state.selected} closeInfo={closeInfo} /> : false}
      </main>
    </div>
    // <browserRouter>
    // <header />
    // <div className="app">
    //   <container>
    //     <switch>
    //       <Route path="/" component={Trending} exact />
    //       <Route path="/movies" component={Trending} />
    //       <Route path="/series" component={Trending} exact />
    //       <Route path="/search" component={Trending} exact />
          
    //     </switch>
    //   </container>
    // </div>
    // </browserRouter>
  );       
}

export default App