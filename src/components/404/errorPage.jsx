import { Link } from 'react-router-dom';
function ErrorPage() {
    return (
        <section className="errorpage">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="errorpage-content">
                            <h1>خطأ !!404</h1>
                            <h2>الصفحة غير موجودة &#128531; &#128531;</h2>
                            <p>الصفحة التي تحاول الوصول إليها غير موجودة حالياً.</p>
                            <Link to='/ketaby' className="btn btn-primary">Go to Homepage</Link>
                            <img src={process.env.PUBLIC_URL + '/imgs/404_books.webp'} alt="books" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage;