import { useState } from 'react';
import './App.css';

const productsObj = [
  {name: 'iphone', price: 2000},
  {name: 'samsung', price: 1000},
  {name: 'motorola', price: 3000},
  {name: 'nokia', price: 4000},
];

function App() {
  const [products, setProducts] = useState(productsObj);
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState("");

  return (
    <main>
      <div className='products'>
      <div>
        <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder='new product'/>
        <button type='button' onClick={()=>{
          setProducts([...products, {name: value, price: 3000}])
        }}>Add</button>
      </div>
      {
        products.map((product)=>{
          return <div className='product'>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button type="button" onClick={()=>{
              setCart([...cart, product]);
            }}>Add to cart</button>
          </div>
        })
      }
      </div>
      <div className="cart">
          {cart.map(item=>{
            return <div className='cart-item'>
                  <div>{item.name}</div> <div>{item.price}</div>
              </div>
          })}
      </div>
    </main>
  );
}

export default App;
