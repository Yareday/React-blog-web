import React, { useState } from "react";

import PayPal from "../../components/PayPal";

function Blog() {
    
  const [checkout, setCheckOut] = useState(false);

  return (
      
    <div className="App">
        <div className="bloghelp">
            <h1>Want to see the blogs</h1> 
           

        </div>
        <div className="donation">
                <h2>Donate a little, Amazing blogs will appear very soon! </h2>
            </div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Contribute here        </button>
      )}
    </div>
  );
}

export default Blog;
