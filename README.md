# Container Queries
Demonstration for using container queries when building components

> Watch below and keep in mind that the three blue sections are all using the same component code. The top component changes its layout from _column_ to _row_ when it's own width is greater than `600px`

![Container Queries FTW](container-query.gif)

One way to accomplish this would be media queries. But... what if you wanted to have the smaller media query target for a larger screen?

How can we do this without media queries? Simple. Enter the *container query*.

Container queries are an in-progress CSS feature. Think of them as a media query for just the element. We can just apply `width` and `height` rules that define what classes the container should get at those specific definitions.

This project uses `react` and `react-container-query` to demonstrate the container query in action. 

We'll also use CSS Modules to make our styling a little more modular.

Let's look at an example of two container queries (small and large). We'll say that `small` is any width up to `400px` and `large` is any width greater than `400px`. We'll just change the `background-color`.
```
// Widget.css
.common {
  /* common styles */
}

.small {
  composes: common;
  background-color: firebrick;
}

.large {
  composes: common;
  background-color: tomato;
}

-----------------------------------------------------

// Widget.js
import React, { Component } from "react";
import classnames from "classnames";
import { applyContainerQuery } from "react-container-query";

import styles from "./Widget.css";

class Widget extends Component {
  render() {
    const { containerQuery } = this.props;
  
    return (
      <div className={classnames(containerQuery)}>
        ...Widget content
      </div>
    );
  }
}

const query = {
  [styles.small]: {
    maxWidth: 400,
  },
  [styles.large]: {
    minWidth: 401,
  },
};

export default applyContainerQuery(Widget, query);
```

Now we have a component that will have a background color of `firebrick` up until it's width reaches over `400px`, then it will change its background color to `tomato`.


### Installation and Demo
1. `npm install`
2. `npm start`
3. Browse to `localhost:3000/`
