import React from "react";
import PropTypes from "prop-types";

import makeStyles from "./fade-transition-styles";
import CSSTransition from "react-transition-group/CSSTransition";

const useStyles = makeStyles();

function FadeTransition({ show, children }) {
  const transTime = 300;
  const classes = useStyles({ transTime });

  return (
    <CSSTransition
      in={show}
      timeout={transTime}
      unmountOnExit
      classNames={{
        enter: classes.transitionEnter,
        enterActive: classes.transitionEnterActive,
        exit: classes.transitionExit,
        exitActive: classes.transitionExitActive,
      }}
    >
      {children}
    </CSSTransition>
  );
}

FadeTransition.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default FadeTransition;
