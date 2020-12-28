import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from '../containers/NotFound';

const Player = (props) => {
	const { id } = props.match.params;

	const hasPlaying = Object.keys(props.playing).length > 0;

	useEffect(() => {
		props.getVideoSource(id);
	}, []);

	return hasPlaying ? (
		<div className="Player">
			<video controls autoPlay>
				<source src={props.playing.source} type="video/mp4" />
			</video>
			<div className="Player-back">
				<button type="button" onClick={() => props.history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	) : (
		<NotFound />
	);
};

const mapStateToProps = (state) => {
	return {
		playing: state.playing,
	};
};

const mapDispathToProps = {
	getVideoSource,
};

export default connect(mapStateToProps, mapDispathToProps)(Player);

/* Hola!

Implemente la solución aplicando useLayoutEffect.

Según la documentación funciona igual que useEffect, pero renderiza de forma síncrona.



import React, { useLayoutEffect } from 'react';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useLayoutEffect(() => {
    props.setVideoSource(id);
  }, []);

  return hasPlaying ? (
    <section className='player'>
      <video className='player__item' controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='player__back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </section>
  ) : <NotFound />;
};
*/
