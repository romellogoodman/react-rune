# react-rune

React wrapper for [Rune.js](https://runemadsen.github.io/rune.js/index.html)

### Install

```
npm i react-rune
```

### Use

```js
import React from 'react';
import Rune from 'react-rune';

const FooBar = () => {
  const draw = (rune) => {
    rune.rect(0, 0, 200, 200).fill(0, 0, 255);
  };

  return (
    <>
      <div id="canvas" />
       <Rune height={400} width={400} draw={draw} />
    </div>
  );
};

export default FooBar
```
