import React, { Component } from "react";
import classnames from "classnames";
import { applyContainerQuery } from "react-container-query";

import styles from "./Widget.css";
import createThing from "./Thing";

const Thing = createThing(React);

class Widget extends Component {
  render() {
    const { containerQuery } = this.props;

    return (
      <div className={classnames(containerQuery)}>
        <Thing />
        <Thing />
        <Thing />
      </div>
    );
  }
}

const containerQuery = {
  [styles.columnLayout]: {
    maxWidth: 600,
  },

  [styles.rowLayout]: {
    minWidth: 601,
  },
};

export default applyContainerQuery(Widget, containerQuery);
