import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Categories from './components/Categories';
import Main from './pages/main';


const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Categories}/>
            <Route path="/restaurantes" component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;