/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

import Productcard from "./ProductCard";

function App() {
  // own JSON data for task purpose
  const data = [
    {
      productImage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/television/j/2/j/-original-imagtq4hqqt37tgx.jpeg?q=70",
      model: "SAMSUNG Crystal Vision 4K iSmart with one billion true colors",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 86,000/-",
      prime: "Prime Product 🎁 ",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/r/t/-original-imagttgtnezgzrxn.jpeg?q=70",
      model: "Hisense Tornado 164 cm (65 inch) Ultra HD (4K) LED",
      rating: "⭐⭐⭐",
      price: "Price: 65,000/-",
      offerPrice: "Offer Price: 46,000/-",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/x/n/-original-imaguem7rhy9zzrf.jpeg?q=70",
      model: "SONY 138.8 cm (55 inch) Ultra HD (4K) LED",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 78,000/-",
      offerPrice: "Offer Price: 64,000/-",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/e/i/m/-original-imagtvdyjzxgz3f7.jpeg?q=70",
      model: "LG UR7500 108 cm (43 inch) Ultra HD (4K) LED",
      rating: "⭐⭐⭐⭐",
      price: "Price: 76,000/-",
      prime: "Prime Product 🎁 🎁",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/f/n/x/-original-imagu436gkxxcsqz.jpeg?q=70",
      model: "Mi X Series 125 cm (50 inch) Ultra HD (4K) LED",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 55,000/-",
      offerPrice: "Offer Price: 49,000/-",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/b/g/n/-original-imagtwterapbxxdj.jpeg?q=70",
      model: "MOTOROLA EnvisionX 165 cm (65 inch) QLED Ultra HD (4K)",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 42,000/-",
      offerPrice: "Offer Price: 39,000/-",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/3/r/6/-original-imaghqxamymfz8tu.jpeg?q=70",
      model: "Thomson 139 cm (55 inch) QLED Ultra HD (4K)",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 33,000/-",
      prime: "Prime Product 🎁 🎁",
    },
    {
      productImage:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/4/q/m/-original-imagnvxzkgqp5ubf.jpeg?q=70",
      model: "iFFALCON by TCL U62 139 cm (55 inch) Ultra HD (4K) LED",
      rating: "⭐⭐⭐",
      price: "Price: 30,000/-",
      offerPrice: "Offer Price: 27,000/-",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gZWUHJqYL._SX466_.jpg",
      model:
        "OnePlus 80 cm (32 inches) Y Series HD Ready Smart Android TV 32Y1",
      rating: "⭐⭐⭐⭐",
      price: "Price: 18,999/-",
      offerPrice: "Offer Price: 13,999/-",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/819Lw2PE8tL._SX466_.jpg",
      model:
        "Redmi 80 cm (32 inches) F Series HD Ready Smart Fire TV L32R8-FVIN",
      rating: "⭐⭐⭐⭐",
      price: "Price: 19,999/-",
      offerPrice: "Offer Price: 10,999/-",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71S8iUPW9bL._SX466_.jpg",
      model: "Samsung 80 cm (32 inches) HD Smart LED TV UA32T4380AKXXL",
      rating: "⭐⭐⭐⭐",
      price: "Price: 16,999/-",
      offerPrice: "Offer Price: 13,990/-",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/511DmhAgHAL._SX466_.jpg",
      model: "Acer 80 cm (32 inches) Advanced HD Google AR32GR2841HDFL",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 14,000/-",
      prime: "Prime Product 🎁 🎁",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71KST+9epCL._SX466_.jpg",
      model: "Nu 80 cm (32 inch) WebOS Series HD Ready Smart TV LED32HWA1",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 12,990/-",
      offerPrice: "Offer Price: 13,990/-",
    },
    {
      productImage:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/419-Smg2kmL._SY300_SX300_QL70_FMwebp_.jpg",
      model: "TCL 101 cm (40 inches) Bezel-Less Smart Android TV 40S5400A",
      rating: "⭐⭐⭐⭐⭐",
      price: "Price: 20,990/-",
      offerPrice: "Offer Price: 16,990/-",
    },
  ];
  // const [product, setProduct] = useState(data);
  const [product, setProduct] = useState([]);
  const [inCart, setinCart] = useState(0);

  // prvent from page crash we can set rating delay timeout here
  setTimeout(() => {
    setProduct(data);
  }, 1000);

  //in div instead of data.map we can use product.map
  //actual  {data.map((prot, indx) => (
  return (
    <div className="app">
      <div className="topnav">
        <div className="menu">
          <div className="logo">
            <a rel="noreferrer" href="https://www.amazon.in/" target="_blank">
              <img
                className="logo-img"
                src="https://i.ibb.co/gTY1M4F/amazon-logo-orange-removebg-preview.png"
                alt="amazon-logo-orange-removebg-preview"
              />
            </a>
          </div>
          <div className="navbtns">
            <a
              className="home"
              href="https://www.amazon.in/minitv"
              target="-blank"
            >
              Home
            </a>
            <a
              className="prime"
              href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember"
              target="-blank"
            >
              Prime
            </a>
            <a
              className="shop"
              href="https://www.amazon.in/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2"
              target="-blank"
            >
              Shop
            </a>
            <a
              className="sign-in"
              href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fbrowse.html%3Fnode%3D1389396031%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
              target="-blank"
            >
              Sign-in
            </a>
          </div>
        </div>
        <div className="cart-details">
          <p className="cart">Cart</p>
          <div className="cartQty-Sec">
            <span className="cart-total">{inCart}</span>
            <span className="material-symbols-outlined">shopping_cart</span>
          </div>
        </div>
      </div>
      <div className="brandName">
        <p className="title">Digital Screen Mela</p>
        <div className="brand-descrip">
          <p>
            ENJ😊Y <span className="brandDescripin">The Real Visuvalation</span>{" "}
            W🌏RLD
          </p>
        </div>
      </div>

      {/* <div className="cart-qtysec">
     
    </div> */}
      <div className="cart-area">
        {product?.map((prot, indx) => (
          <Productcard
            key={indx}
            productImage={prot.productImage}
            model={prot.model}
            rating={prot.rating}
            price={prot.price}
            prime={prot.prime}
            offerPrice={prot.offerPrice}
            inCart={inCart}
            setinCart={setinCart}
          />
        ))}
      </div>
      <div className="foot">
        <span className="copyright">@copyright-2023 www.amazon.in</span>
      </div>
    </div>
  );
}

export default App;
