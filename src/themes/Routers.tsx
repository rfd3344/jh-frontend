import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import StarWars from '@/pages/StarWars';
import Histogram from '@/pages/Histogram';
import Todos from '@/pages/Todos';
import Test from '@/pages/Test';
import NotFound from '@/pages/NotFound';

const Routers = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/starwars" component={StarWars} />
		<Route exact path="/histogram" component={Histogram} />
		<Route exact path="/todos" component={Todos} />
		<Route exact path="/test" component={Test} />

		<Route path="*" component={NotFound} />
	</Switch>
);

export default Routers;