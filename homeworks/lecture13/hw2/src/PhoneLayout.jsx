import './PhoneLayout.css';

import React from 'react';

class PhoneLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: 'Status Bar',
    };
  }

  handleClick = (number) => {
    this.setState({ clickedButton: number + ' clicked!' });
  };

  render() {
    return (
      <div className='phone-screen'>
        <div className='status-bar'>
          <span>{this.state.clickedButton}</span>
        </div>
        <div className='top-button-grid'>
          {[...Array(16)].map((val, idx) => (
            <button
              key={idx + 1}
              className='phone-button'
              onClick={() => this.handleClick(idx + 1)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <div className='down-button-grid'>
          {[17, 18, 19, 20].map((val) => (
            <button
              key={val}
              className='phone-button'
              onClick={() => this.handleClick(val)}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default PhoneLayout;
