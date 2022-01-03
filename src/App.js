import React from 'react';
import { Route, Switch } from 'react-router';
import { StoriesContainer } from './containers/StoriesContainer';
import { StoriesContainercopy } from './containers/StoriesContainercopy';
import { StoriesContainercopycopy } from './containers/StoriesContainercopycopy';
import { useState } from "react";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";

import './App.css';
import { Storycopycopy } from './components/Storycopycopy';
import { Storycopy } from './components/Storycopy';

export const App = () =>{
    const [searching, setSearching] = useState("");


    return(
        <div>
            <NavBar />
            <Switch>
      <Route exact path='/' component={StoriesContainer}/>
      {/* <Route  path='/Top-Authors' component={StoriesContainercopy}/> */}

      <Route path="/Top-Authors"   render={() => (
                 <div>
                          <Filter
                          handleSearch={(e) => setSearching(e.target.value)}
                        />
                        <StoriesContainercopy

                   />
                  </div>
                  )}

              />
      <Route path="/recomended-stories" component={StoriesContainercopycopy}/>
            </Switch>
        </div>
    )
} ;
