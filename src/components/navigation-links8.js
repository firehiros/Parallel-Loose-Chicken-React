import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links8.css'

const NavigationLinks8 = (props) => {
  return (
    <nav className={`navigation-links8-nav ${props.rootClassName} `}>
      <span className="navigation-links8-text">{props.text}</span>
      <span className="navigation-links8-text1">{props.text1}</span>
      <span className="navigation-links8-text2">{props.text2}</span>
      <span className="navigation-links8-text3">{props.text3}</span>
      <span className="navigation-links8-text4">{props.text4}</span>
    </nav>
  )
}

NavigationLinks8.defaultProps = {
  rootClassName: '',
  text1: 'Features',
  text3: 'Team',
  text2: 'Pricing',
  text4: 'Blog',
  text: 'About',
}

NavigationLinks8.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks8
