import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'
import Header from './header/header'
import initialStoreItems from './store-items'

const App = () => {
  const [storeItems, setStoreItems] = useState(initialStoreItems)

  return (
    <div className="app">
      <Header storeItems={storeItems} />
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list"></ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}
export default App
