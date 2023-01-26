const Layout = ({ rightEl, leftEl }) => {
  return (
    <div className="createOrderContainer h-full flex gap-4">
      <div className="menuContainer flex flex-col bg-dark rounded-xl p-6 w-70 gap-4">{rightEl}</div>
      <div className="orderContainer w-30 flex flex-col bg-dark rounded-xl p-6">{leftEl}</div>
    </div>
  );
};

export default Layout;
