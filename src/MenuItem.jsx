const MenuItem = ({ product }) => {
  return (
    <div className="card mb-2" style={{width: '20%', height: '150px', backgroundColor: '#2875C6', border: 'none', color: '#ffffff'}}>
      <div className="card-body d-flex flex-column justify-content-between">
          <span>{product.name}</span>
          <small style={{alignSelf: 'flex-end'}}>Gs. {product.price}</small>
      </div>
    </div>
  )
}

export default MenuItem