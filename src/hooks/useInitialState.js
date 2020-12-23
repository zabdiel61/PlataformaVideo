import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	// const [videos, setVideos] = useState([]);

	/* El verdadero problema es que el servidor json-server está devolviendo
 una respuesta en cache con codigo de estado 304, por lo que al hacer 
 el fetch el response body viene vacio. Esto pueden observar en la terminal 
 que lanzaron el server haciendo una peticion. Finalmente esto desencadena
  una referencia nula a videos ya que no se le asigno valor alguno.

Espero haber aclarado el panorama */
	const [videos, setVideos] = useState({
		mylist: [],
		trends: [],
		originals: [],
	});

	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);

	return videos;
};

export default useInitialState;

/* Comparto lo que hice. Fui un paso más allá y generé de forma dinámica todos los carousels:

useInitialState.js
import { useState, useEffect } from "react";

const useInitiaState = (API) => {

    const [videos, setVideos] = useState({ "mylist": [], "trends": [], "original": [] });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
                setCategories(Object.keys(data));
            });
    }, []);

    return [videos, categories];
};

export default useInitiaState;
*/

/* App.jsx

import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {

    const [videos, categories] = useInitialState(API);

    return (
        <div>
            <Header />
            <SearchBar />
            {categories.map((category) => (
                videos[category].length > 0 && (
                    <Categories title={category}>
                        <Carousel>
                            {videos[category].map((item) => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )))}
            <Footer />
        </div>
    );
};

export default App;
*/
