import React from 'react';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      ordinal: '',
    };
  }

  getOrdinal = (num) => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return num + 'th';
    }
    switch (lastDigit) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  };

  handleChange = (e) => {
    const val = e.target.value;
    if (!isNaN(val) && val !== '') {
      this.setState({
        number: val,
        ordinal: this.getOrdinal(parseInt(val, 10)),
      });
    } else {
      this.setState({
        number: val,
        ordinal: val,
      });
    }
  };

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type='text'
          value={this.state.number}
          onChange={this.handleChange}
          placeholder='Provide your input'
          style={{ fontSize: '1.5em', padding: '5px', marginRight: '10px' }}
        />
        <input
          type='text'
          value={this.state.ordinal}
          readOnly
          style={{ fontSize: '1.5em', padding: '5px' }}
        />
      </div>
    );
  }
}

export default Converter;
