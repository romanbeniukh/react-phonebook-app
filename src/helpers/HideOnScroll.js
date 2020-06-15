import React from 'react';
import T from 'prop-types';
import { Slide, useScrollTrigger } from '@material-ui/core';

const HideOnScroll = props => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: T.element.isRequired,
  window: T.func,
};

export default HideOnScroll;
