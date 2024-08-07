import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  divStyles: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  imgStyles: {
    display: 'block',
    margin: '0 auto',
    cursor: 'pointer',
  },
};

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

class CopyCat extends React.Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 40 }}>
          Copy Cat {this.props.name ? this.props.name : 'Tom'}
        </h1>
        <input type="text" value={this.props.input} onChange={this.props.handleChange} />
        <img
          style={styles.imgStyles}
          alt="cat"
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
        />
        <p>{this.props.copying && this.props.input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
};

export default CopyCat;