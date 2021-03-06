import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, BgCard } from './styled';
import Slider from './Slider';
import ButtonsContainer from './ButtonsContainer';
import Info from './Info';

function Swipe({
  width,
  onWhatsapp,
  onLike,
  onDislike,
  onSuperLike,
  garment,
  border,
  height = '355px',
  initialOpen,
}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [garment]);

  const handleImageClick = () => setIsOpen(!isOpen);

  return !!garment.photos && (
    <Wrapper width={width} animate={isAnimating}>
      <Slider
        border={border}
        height={height || '355px'}
        onClick={handleImageClick}
        imageUrls={garment.photos}
      />
      <ButtonsContainer
        onWhatsapp={onWhatsapp}
        onLike={onLike}
        onDislike={onDislike}
        onSuperLike={onSuperLike}
      />
      <Info isOpen={isOpen} garment={garment} />
      <BgCard index={1} />
      <BgCard index={2} />
    </Wrapper>
  );
}

Swipe.propTypes = {
  border: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  onDislike: PropTypes.func,
  onSuperLike: PropTypes.func,
  onLike: PropTypes.func,
  onWhatsapp: PropTypes.func,
  garment: PropTypes.object,
  initialOpen: PropTypes.bool,
};

Swipe.defaultProps = {
  onDislike: null,
  width: null,
  border: null,
  onSuperLike: null,
  onLike: null,
  onWhatsapp: null,
  garment: {
    name: '',
    description: '',
    photos: [],
    tags: [],
    userId: {},
  },
  initialOpen: true,
  height: '355px',
};

export default Swipe;
