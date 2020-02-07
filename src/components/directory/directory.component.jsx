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
          id: 1
        },
        {
          title: 'HOLIDAYS',
          imgUrl: 'https://picsum.photos/641.jpg',
          id: 2
        },
        {
          title: 'ANNIVERSARIES',
          imgUrl: 'https://picsum.photos/642.jpg',
          id: 3
        },
        {
          title: 'BUSINESS',
          imgUrl: 'https://picsum.photos/643.jpg',
          id: 4,
          size: 'large'
        },
        {
          title: 'FOR KIDS',
          imgUrl: 'https://picsum.photos/644.jpg',
          id: 5,
          size: 'large'
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imgUrl, id, size }) => (
          <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
