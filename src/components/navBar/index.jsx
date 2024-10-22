import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './style.scss';

const data = [
  {
    label: 'HOME',
    to: '/',
  },
  {
    label: 'ABOUT ME',
    to: '/about',
  },
  {
    label: 'SKILLS',
    to: '/skills',
  },
  {
    label: 'RESUME',
    to: '/resume',
  },
  {
    label: 'PORTFOLIO',
    to: '/portfolio',
  },
  {
    label: 'CONTACT',
    to: '/contact',
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={'/'}>
						<svg
							className="navbar__container__nav-logo"
							fill="none"
							viewBox="0 0 84 96"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g id="logo">
								<g id="Group">
									<g id="Group_2">
										<path
											d="M42 3L3 25V70L42 93L81 71V26L42 3Z"
											id="Shape"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="5"
										/>
										<path
											d="M30.1719 29.875H42.8984C45.5078 29.875 47.75 30.2656 49.625 31.0469C51.5156 31.8281 52.9688 32.9844 53.9844 34.5156C55 36.0469 55.5078 37.9297 55.5078 40.1641C55.5078 41.9922 55.1953 43.5625 54.5703 44.875C53.9609 46.1719 53.0938 47.2578 51.9688 48.1328C50.8594 48.9922 49.5547 49.6797 48.0547 50.1953L45.8281 51.3672H34.7656L34.7188 45.8828H42.9453C44.1797 45.8828 45.2031 45.6641 46.0156 45.2266C46.8281 44.7891 47.4375 44.1797 47.8438 43.3984C48.2656 42.6172 48.4766 41.7109 48.4766 40.6797C48.4766 39.5859 48.2734 38.6406 47.8672 37.8438C47.4609 37.0469 46.8438 36.4375 46.0156 36.0156C45.1875 35.5938 44.1484 35.3828 42.8984 35.3828H37.2031V64H30.1719V29.875ZM49.25 64L41.4688 48.7891L48.8984 48.7422L56.7734 63.6719V64H49.25Z"
											id="R"
										/>
									</g>
								</g>
							</g>
						</svg>
					</Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>

          {data.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;