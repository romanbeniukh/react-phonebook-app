import React from 'react';
import T from 'prop-types';

const Section = ({ title, children, hiddenTitle }) => (
  <section>
    <h1 className={hiddenTitle ? 'title visually-hidden' : 'tittle'}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: T.string.isRequired,
  children: T.oneOfType([T.arrayOf(T.node), T.node]).isRequired,
  hiddenTitle: T.bool.isRequired,
};

export default Section;
