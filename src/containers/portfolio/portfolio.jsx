import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from './../../components/pageHeaderContent/index';
import ImageOne from '../../images/image-1.jpg';
import ImageTwo from '../../images/image-2.jpg';
import ImageThree from '../../images/image-3.jpg';
import ImageFour from '../../images/image-4.jpg';
import ImageFive from '../../images/image-5.jpg';
import ImageSix from '../../images/image-6.jpg';
import ImageSeven from '../../images/image-7.jpg';
import ImageEight from '../../images/image-8.jpg';
import './style.scss';

const portfolioData = [
  {
    id: 2,
    link: '',
    name: "Ecommerce",
    image: ImageOne
  },
  {
    id: 3,
    link: '',
    name: "App",
    image: ImageTwo
  },
  {
    id: 2,
    link: '',
    name: "Ice-Cream Shop",
    image: ImageThree
  },
  {
    id: 4,
    link: '',
    name: "Design",
    image: ImageFour
  },
  {
    id: 3,
    link: '',
    name: "Todo App",
    image: ImageFive
  },
  {
    id: 2,
    link: '',
    name: "Shop Store",
    image: ImageSix
  },
  {
    id: 4,
    link: '',
    name: "System Design",
    image: ImageSeven
  },
  {
    id: 2,
    link: '',
    name: "Amazon Clone",
    image: ImageEight
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All'
  },
  {
    filterId: 2,
    label: 'Web Development'
  },
  {
    filterId: 3,
    label: 'App Development'
  },
  {
    filterId: 4,
    label: 'Design'
  },
];

const Portfolio = () => {
  const [filteredData, setFilteredData] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredData(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems = filteredData === 1? portfolioData : portfolioData.filter((item) => item.id === filteredData);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className='portfolio__content__filter'>
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredData? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className='portfolio__content__cards'>
          {filteredItems.map((item, index) => (
            <div
              key={`cardItem ${item.name.trim()}`}
              className='portfolio__content__cards__item'
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="Dummy data" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div className="overlay__content">
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;