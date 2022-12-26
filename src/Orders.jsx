import Menu from "./Menu";
import Order from "./Order";

const Orders = () => {
    return (
      <div className="container-fluid">
        <div className="row pt-4 pb-4">
          <div className="col-sm-8 p-2">
            <Menu />
          </div>
          <div className="col-sm-4">
            <Order />
          </div>
        </div>
      </div>
    );
};

export default Orders;
