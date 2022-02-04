import React from 'react';
import "./buttons.css";

function buttons() {
  return <div className="buttonlayer">
      <div className="btn-wrapper">
      <button>
          1
      </button >
      <button >
          2
      </button>
      <button>
          3
      </button>
      <button>
         + 
      </button>
      </div>

      <div className="btn-wrapper">
      <button>
          4
      </button >
      <button >
          5
      </button>
      <button>
          6
      </button>
      <button>
      -
      </button>
      </div>

      <div className="btn-wrapper">
      <button>
          7
      </button >
      <button >
          8
      </button>
      <button>
          9
      </button>
      <button>
      x
      </button>
      </div>

      <div className="btn-wrapper">
      <button>
          .
      </button >
      <button >
          0
      </button>
      <button>
          %%
      </button>
      <button>
          %    
      </button>
      </div>

      <div className="btn-wrapper">
      <button>
          C
      </button >
      <button >
          ?
      </button>
      <button className="btn-enter">
          ENTER
      </button>
      </div>
  </div>
}

export default buttons;
