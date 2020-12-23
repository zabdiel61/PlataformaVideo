import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
	/* Para evitar ese div que hace Wrapper podemos usar React.Fragment. 
	El para incluir muchas etiquetas html dentro del return usa un div como 
	Wrapper y eso genera siempre un nodo mas html para cada componente con 
	React.Fragment evitamos eso
Quedaria asi: */
	<React.Fragment>
		<section className="carousel">
			<div className="carousel__container">{children}</div>
		</section>
	</React.Fragment>
);

export default Carousel;
