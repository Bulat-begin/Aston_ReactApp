import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getDataFromLS, removeDataFromLS } from '../../utils/local-storage';
import { useTheme } from '../../context/theme-provider';

import style from './header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const isAuth = getDataFromLS('isAuth', '""');

	const logoutF = () => {
		removeDataFromLS('isAuth');
		navigate('/');
		window.location.reload();
	};

	const { theme, toggleTheme } = useTheme();

	return (
		<header className={style.header}>
			<div>
				<Link to={'/'}>
					<img
						className={style.img}
						src="https://cdn4.iconfinder.com/data/icons/categories-2/32/356-01-1024.png"
						alt="Logo"
					/>
				</Link>
			</div>
			<button className={style.button} onClick={toggleTheme}>
				{theme === 'light' ? <span>Светлая тема</span> : <span>Темная тема</span>}
			</button>
			<nav className={style.navbar}>
				{isAuth ? (
					<>
						<Link className={style.link} to="/favorites">
							Избранное
						</Link>
						<Link className={style.link} to="/history">
							История
						</Link>
						<button onClick={logoutF}>Выйти</button>
					</>
				) : (
					<>
						<Link className={style.link} to="/login">
							Авторизация
						</Link>
						<Link className={style.link} to="/registration">
							Регистрация
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
