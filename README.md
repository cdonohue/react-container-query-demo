# Using React Container Queries

###### Technologies used:
- [react](https://facebook.github.io/react/)
- [react-container-query](http://d6u.github.io/react-container-query/)
- [webpack](https://github.com/webpack/webpack) (with [CSS modules](https://github.com/css-modules/css-modules))

> Watch below and keep in mind that the three grid sections are all using the same component code. The components change their layout from _column_ to _row_ when component width is greater than `600px`

![Container Queries FTW](container-query.gif)

Could you accomplish the above using media queries? Probably, but you would need to target the top component somehow. Why not let the components figure out how to display their content.

How can we do this without media queries? Simple. Enter the **container query**.

Container queries are an in-progress CSS feature. Think of them as a media query for just the element. We can just apply `width` and `height` rules that define what classes the container should get at those specific definitions.

This project uses [react](https://facebook.github.io/react/) and [react-container-query](http://d6u.github.io/react-container-query/) to demonstrate the container query in action. 

We'll also use [CSS Modules](https://github.com/css-modules/css-modules) to make our styling a little more modular.

Let's look at the example above with two container queries (columnLayout and rowLayout). We'll say that `columnLayout` is any width up to `600px` and `rowLayout` is any width greater than `600px`. We'll just change the `flex-direction`.
```css
/* Widget.css */
.common {
  /* common styles */
}

.columnLayout {
  composes: common;
  flex-direction: column;
}

.rowLayout {
  composes: common;
  flex-direction: row;
}
```
```js
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

// See note below
const query = {
  [styles.columnLayout]: {
    maxWidth: 600,
  },
  [styles.rowLayout]: {
    minWidth: 601,
  },
};

export default applyContainerQuery(Widget, query);
```

Elsewhere in another component...
```html
...
<Widget />
...
```

That's it. Now we have a component that will layout it's children in a `column` up until it's width reaches over `600px`, then it will change its layout to `row`.

> Note: You might be asking why we are using [computed property names](https://github.com/lukehoban/es6features#enhanced-object-literals) in the container query. Good question. Since we are using CSS Modules to load our styles into the component, a hash is created from the css class to avoid clashing. So, by using computed properties here, we can take advantage of that hash while still using a human readable name in the code.

### Installation and Demo
1. `npm install`
2. `npm start`
3. Browse to `localhost:3000/`
