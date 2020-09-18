import React from 'react'

import Item1 from '../../public/seepage.png';
import Item2 from '../../public/weed_feed.png';
import Item3 from '../../public/on_the_individual.png';
import Item4 from '../../public/eat_the_weeds.png';

export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          url: 'https://seepage.herokuapp.com/home',
          img: Item1,
          alt: 'screenshot of Seepage website',
          caption: 'Fullstack development for a CMS for an art collective'
        },
        {
          url: 'https://weed-feed.herokuapp.com/',
          img: Item2,
          alt: 'screenshot of Weed Feed website',
          caption: 'Design and fullstack development for app that allows user to track watering and feeding needs of a weed plant'
        },
        {
          url: "https://bibiqiqi.github.io/on-the-individual/",
          img: Item3,
          alt: 'screenshot of On the Individual website',
          caption: 'Fullstack development for a website that published final thesis for a client'
        },
        {
          url: 'https://bibiqiqi.github.io/Eat_The_Weeds/',
          img: Item4,
          alt: 'screenshot of Eat the Weeds website',
          caption: 'Design and fullstack development for app that allows user to find edible weeds in their area buy querying the iNaturalist app'
        },
      ]
    };
  }

  render() {
    const thumbnails = this.state.websiteUrls.map((e, i) => {
      <a href={e.url} className='portfolio-item'>
        <img src={e.img} alt={e.alt}>
        </img>
      </a>
    });
    return (
      <div>
        {thumbnails}
      </div>
    )
  }
}
