import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../containers/Player';
import Layout from '../components/Layout';

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/player/:id" component={Player} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;

/* Dentro de nuestro proyecto vamos a crear una carpeta llamada routes donde vamos
 a ir añadiendo las rutas que necesitemos en la aplicación.

Las rutas que añadamos debemos definirlas con el componente Route y estas deben 
estar encapsuladas dentro del componente BrowserRouter del paquete 
de react-router-dom. Para definir una ruta con el componente Route debemos pasarle
 las props de:

path para indicar la url.
exact si queremos que funcione única y exactamente con la url que le digamos.
component para indicarle el componente que va a renderizar. */
