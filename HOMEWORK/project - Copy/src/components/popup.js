import React from 'react';
import HorizontalCarousel from './HorizontalCarousel.js';

function Popup() {
  return (
    <div style={styles.main}>
      <h1>Pictures Popup</h1>
      <HorizontalCarousel />
    </div>
  );
}

const styles = {
  main: {
    width: '600px',
    height: '900px',
  },
};

export default Popup;
