import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
	return (
		<>
			<Search />
			{myList.length > 0 && (
				<Categories title="Mi Lista">
					<Carousel>
						<CarouselItem />
					</Carousel>
				</Categories>
			)}

			<Categories title="tendencias">
				<Carousel>
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title="Originals">
				<Carousel>
					{originals.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		myList: state.myList,
		trends: state.trends,
		originals: state.originals,
	};
};

export default connect(mapStateToProps, null)(Home);

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
        const response = await fetch("http://localhost:3000/);
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
*/
