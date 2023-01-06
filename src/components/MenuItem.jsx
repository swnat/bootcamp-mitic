const NewMenuItem = ({ product, onClickProduct }) => {

  const productClickHandler = () => {
    onClickProduct(product)
  }

  return (
    <div className="foodItem" onClick={productClickHandler}>
      <div>
        <span>{product.name}</span>
        <br />
        <small>Gs. {product.price.toLocaleString()}</small>
      </div>
      {product.amount > 0 && 
        <>
          <span style={{alignSelf:'flex-end', fontSize: '20px', color: '#ffffff', zIndex: '100'}}>{product.amount}</span>
          <div className="amountDisplay"></div>
        </>
      }
    </div>
  )
}

export default NewMenuItem