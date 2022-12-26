const Order = () => {
  return (
    <>
      <div className="mb-2" style={{backgroundColor: '#212529', borderRadius: '4px', color: '#ffffff', padding: '5px 10px'}}>
        <h6 className="mb-0">Table01</h6>
        <small>Jessica S.</small>
      </div>
      
      <table className="table" style={{color: '#ffffff'}}>
        <thead>
          <tr>
            <th scope="col">Qty</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cafe con leche</td>
            <td>10.000</td>
            <td>10.000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Agua</td>
            <td>5.000</td>
            <td>10.000</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mixto</td>
            <td>12.000</td>
            <td>12.000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th colSpan="3">32.000</th>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Order