function Cart({ cart, removeItem, emptyCart }) {
    function EmptyCart() {
        return (
            <div className="offcanvas-body">
                <div className="shopping-details">
                    <div className="shopping-icon">
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <p>السلة فارغة</p>
                    </div>
                    <button className="btn btn-primary">العودة الى التسوق</button>
                </div>
            </div>
        );
    }
    function FilledCart() {
        return (
            <div className="offcanvas-body">
                <div className="cart-product">
                    {cart.line_items && cart.line_items.map(item => (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-img">
                                <img src={item.image.url} alt="" />
                            </div>
                            <div className="info-txt">
                                <h6>
                                    <a href="/">{item.name}</a>
                                </h6>
                                <p>
                                    <span>{item.quantity}</span>
                                </p>
                            </div>
                            <div className="remove-item">
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                    <i className="fa-solid fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btns">
                    <button onClick={emptyCart} className="btn btn-danger">حذف الكل</button>
                    <button className="btn btn-primary">تحميل</button>
                </div>
            </div>
        );
    }
    let x;
    if (cart.line_items) {
        x = cart.line_items.length;
    }

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">السلة</h5>
            </div>
            {x === 0 ? <EmptyCart /> : <FilledCart />}
        </div>
    );
}
export default Cart;