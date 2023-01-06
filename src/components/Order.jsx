
const NewOrder = ({ order, onPlaceOrder }) => {

  const placeOrderHandler = () => {
    onPlaceOrder()
  }

  if(order.items.length < 1){
    return (
      <div className="mat justify-center">
        <p className="text-muted-dark lead" style={{textAlign: 'center', fontSize: '14px'}}>
          Start creating a new order by adding items from the left menu.
        </p>
      </div>
    )
  }

  return (
    <div className="mat">
      <div className="orderHeader">
        <p>Table 01</p>
        <small className="text-muted-dark">Jessica S.</small>
        <hr />
        <div className="orderTitles">
        <span style={{width: '25%'}}>Qty.</span>
          <span style={{width: '45%'}}>Description</span>
          <span style={{width: '15%'}}>Price</span>
          <button className="btn editItemBtb" style={{visibility: 'hidden'}}>
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>

      <div className="orderItems mh-75">
        {order.items.map((orderItem, index) => (
          <div key={index} className="item">
            <div className="itemQty">
              <button className="btn editItemBtn">
                <i className="bi bi-dash"></i>
              </button>
              <p>{orderItem.amount}</p>
              <button className="btn editItemBtn">
                <i className="bi bi-plus"></i>
              </button>
            </div>
            <p style={{width: '45%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
              {orderItem.product.name}
            </p>
            <p style={{width: '15%', textAlign: 'center'}}>
              {(orderItem.product.price * orderItem.amount).toLocaleString()}
            </p>
            <button className="btn editItemBtn">
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="orderFooter">
        <small className="text-muted-dark">Total</small>
        <p><small>Gs. </small>{order.total.toLocaleString()}</p>
      </div>
      <button type="button" className="btn btn-primary orderBtn" onClick={placeOrderHandler}>
          Place Order
        </button>
    </div>
  )
}

export default NewOrder