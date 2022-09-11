import React from 'react';
import './Homes.scss'

const Home = () => {
  return (
    <div>
      <nav className="flex-between">
        <div></div>
        <div><h1>Shopping</h1></div>
        <div className="cart"><img src="https://cdn3d.iconscout.com/3d/premium/thumb/cart-5590712-4652404.png" alt="cart" /></div>
      </nav>
      <div className="products flex-center">
        <div className="product flex-between">
        <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-17730,resizemode-1,msid-92953571/magazines/panache/iphone-14-pro-max-iphone-14-max-to-get-delayed-new-leaks-suggest-shipments-behind-schedule.jpg" alt="iphon14promax" />
        <div className="pricing">
        <h3>I-phone 14 pro max</h3>
        <p>$1000</p>
        </div>
        <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home