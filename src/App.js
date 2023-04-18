import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/index.jsx';
import Header from './components/Header';



const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>} >
        <BrowserRouter>
        <Header/>

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
