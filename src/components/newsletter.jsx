function NewsLetter() {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="newsletter__content text-center">
                            <h2 className="newsletter__title mb-4">إشترك ليصلك كل جديد</h2>
                            <form action="" method="Post" className="newsletter__form">
                                <input type="email" className="form-control newsletter__input" placeholder="أدخل بريد الإلكتروني" />
                                <button className=" btn btn-primary newsletter__button" type="submit">إشترك</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NewsLetter;