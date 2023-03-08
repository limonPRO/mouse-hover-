import React from 'react';
import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <AnimatedCursor
    innerSize={8}
    outerSize={40}
    color='203, 152, 51'
    outerAlpha={0}
    innerScale={0.7}
    trailingSpeed={100}
    outerScale={20}
    outerStyle={{
        border: '2px solid #cb9833'
      }}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
    />
  )    
  

}

export default Cursor