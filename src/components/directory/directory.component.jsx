import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'BIRTHDAYS',
          imgUrl: 'https://picsum.photos/640.jpg',
          id: 1,
          linkUrl: 'birthdays'
        },
        {
          title: 'HOLIDAYS',
          imgUrl: 'https://picsum.photos/641.jpg',
          id: 2,
          linkUrl: 'holidays'
        },
        {
          title: 'ANNIVERSARIES',
          imgUrl: 'https://picsum.photos/642.jpg',
          id: 3,
          linkUrl: 'anniversaries'
        },
        {
          title: 'BUSINESS',
          imgUrl: 'https://picsum.photos/643.jpg',
          id: 4,
          size: 'large',
          linkUrl: 'business'
        },
        {
          title: 'FOR KIDS',
          imgUrl: 'https://picsum.photos/644.jpg',
          id: 5,
          size: 'large',
          linkUrl: 'kids'
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {/* because names of props passed down are same as obj properties, instead of doing individually { title, imgUrl, id, size }, we can just destructure with rest operator */}
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
