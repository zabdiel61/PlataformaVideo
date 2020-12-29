import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
	const { user, isLogin, isRegister } = props;
	//para utilizar .lenth con le objeto se le pasa por object.keys
	//y saber si es eobjeto esta vacio
	const hasUser = Object.keys(user).length > 0;

	const handleLogout = () => {
		props.logoutRequest({});
	};

	const headerClass = classNames('header', {
		isLogin,
		isRegister,
	});

	return (
		<header className={headerClass}>
			<Link to="/">
				<img className="header__img" src={logo} alt="Platzi Video" />
			</Link>

			<div className="header__menu">
				<div className="header__menu--profile">
					{/* 
						A mi se me ocurre que también podría tener una sola img y manejar la lógica dentro del src.
					<img src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon} alt={user.email} /> */}
					{hasUser ? (
						<img src={gravatar(user.email)} alt={user.email} />
					) : (
						<img src={userIcon} alt="" />
					)}

					<p>Perfil</p>
				</div>
				<ul>
					{hasUser ? (
						<li>
							<Link to="/">{user.name}</Link>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<a href="#logout" onClick={handleLogout}>
								Cerrar Sesión
							</a>
						</li>
					) : (
						<li>
							<Link to="/Login">Iniciar Sesión</Link>
						</li>
					)}
				</ul>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
const mapDispatchToProps = {
	logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
