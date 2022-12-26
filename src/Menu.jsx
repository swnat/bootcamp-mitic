import MenuItem from "./MenuItem"

const products = [
  {
    name: 'Cafe americano',
    price: 2,
    quantity: 15000
  },
  {
    name: 'Mixto',
    price: 2,
    quantity: 12000
  },
  {
    name: 'Cafe con leche',
    price: 2,
    quantity: 10000
  },
  {
    name: 'Jugo de frutilla',
    price: 2,
    quantity: 17000
  },
  {
    name: 'Agua',
    price: 5000,
    quantity: 100
  },
  {
    name: 'Gaseosa',
    price: 5000,
    quantity: 100
  },
  {
    name: 'Cafe americano',
    price: 2,
    quantity: 15000
  },
  {
    name: 'Mixto',
    price: 2,
    quantity: 12000
  },
  {
    name: 'Cafe con leche',
    price: 2,
    quantity: 10000
  },
  {
    name: 'Jugo de frutilla',
    price: 2,
    quantity: 17000
  },
  {
    name: 'Agua',
    price: 5000,
    quantity: 100
  },
  {
    name: 'Gaseosa',
    price: 5000,
    quantity: 100
  }
]

const categories = ['drinks', 'food']

const Menu = () => {
  return (
    <div className="row">
      <div className="col-sm-2">
        <div className="d-flex flex-wrap">
          {
            categories.map( (category, index) => <div className="p-2 mb-4" key={index} style={{width: '100%', backgroundColor: '#EC5053', color: '#ffffff', borderRadius: '4px'}}>
              {category}
            </div>)
          }
        </div>
      </div>
      <div className="col-sm-10">
        <div className="d-flex flex-wrap" style={{gridGap: '1%'}}>
          {
            products.map( (product, index) => <MenuItem key={index} product={product} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Menu