// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      const addPrice = cardItem => {
        totalAmount += cardItem.quantity * cardItem.price
      }
      cartList.map(eachCardItem => addPrice(eachCardItem))

      return (
        <div className="card_summary_container">
          <div className="card_summary_card">
            <h1 className="card_summary_heading">
              Order Total:
              <span className="card_summary_amount">Rs {totalAmount}/-</span>
            </h1>
            <p className="card_summary_para">{cartList.length} Items in cart</p>
          </div>
          <button type="button" className="card_summary_button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
