import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Image = ({ source = "" }) => {
  return (
    <img src={source} style={{ width: 200, border: "solid 1px #ededed" }} />
  );
};

const Product = ({
  image = "https://images.puma.net/images/192344/02/sv01/fnd/AUS/w/1000/h/1000/bg/255,255,255",
  name = "",
  prices = {},
  currency = ""
}) => {
  const oldPriceStyle = {
    textDecoration: "line-through",
    color: "#ccc",
    marginRight: 10
  };
  return (
    <div>
      <Image source={image} />
      <p>{name}</p>
      <p>
        {currency}
        {prices.old ? <i style={oldPriceStyle}>{prices.old}</i> : ""}
        {currency}
        {prices.current}
      </p>
    </div>
  );
};

const useShopcity = () => {
  const [shop, setShop] = React.useState({});

  React.useEffect(() => {
    const shopcity = document.getElementById("shopcity");
    if (shopcity) {
      // let data = shopcity.innerHTML;
      let dataJSON = JSON.parse(shopcity.innerHTML);
      // console.log(data);
      setShop(dataJSON);
    }
  }, []);

  return shop;
};

const App = () => {
  const { products = [], details = {} } = useShopcity();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {products.length > 0 && (
        <>
          {products.map((p, index) => (
            <Product
              key={index}
              id={p.id}
              name={p.name}
              prices={p.prices}
              currency={details.currency}
            />
          ))}
        </>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
