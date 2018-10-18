import React from 'react';
import CONST from '../../Common/CONST';
import './Header.scss';


const Header = () => {
	const links = CONST.social.map((link, index) => {
		return <a href={link.link} target="blank" alt={link.name}>{link.name}</a>
	});
	return (
			<header className="header">
				<a href="/"><img src="../../images/VanessaLogo.png" alt="Vanessa Henson" /></a>

				<section className="social">
					{links}
				</section>
			</header>
		)
};

export default Header;