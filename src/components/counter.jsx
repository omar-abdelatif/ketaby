function Counter() {
    const counter = [
        {
            id: 1,
            icon: "fa-solid fa-star",
            num: "+1000",
            title: "التقييمات",
        },
        {
            id: 2,
            icon: "fa-solid fa-book",
            num: "+500",
            title: "مجموع الكتب",
        },
        {
            id: 3,
            icon: "fa-solid fa-download",
            num: "+10000",
            title: "إجمالي التحميلات",
        },
    ]
    return (
        <section className="counter">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    {counter.map(counter => (
                        <div className="col-lg-4 col-sm-6 col-6" key={counter.id}>
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                    <i className={counter.icon}></i>
                                </div>
                                <div className="counter-num">
                                    <h2>{counter.num}</h2>
                                </div>
                                <div className="counter-title">
                                    <h4>{counter.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Counter;