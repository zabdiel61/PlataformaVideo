import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3001/initalState';

const App = () => {
	const initialState = useInitialState(API);

	return initialState.length === 0 ? (
		<h1>Loading...</h1>
	) : (
		<div className="App">
			<Header />
			<Search />
			{initialState.mylist.length > 0 && (
				<Categories title="Mi Lista">
					<Carousel>
						<CarouselItem />
					</Carousel>
				</Categories>
			)}

			<Categories title="tendencias">
				<Carousel>
					{initialState.trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title="Originals">
				<Carousel>
					{initialState.originals.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Footer />
		</div>
	);
};

export default App;

/* Para los que quieran usar async/await en lugar de promesas, pude hacerlo 
modificando el archivo .babelrc de esta manera: 

{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      } 
    ],
    "@babel/preset-react"
  ]
}
Por otro lado, useEffect no puede recibir una función asíncrona (porque no puede 
	devolver una promesa), pero podemos solucionarlo de así:


	useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/initialState");
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
*/
