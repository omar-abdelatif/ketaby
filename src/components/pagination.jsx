import { NavLink } from 'react-router-dom';
function Pagination() {
    return (
        <div className="pagination justify-content-center">
            <ul className="pagination navigation pagination-lg">
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        5
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        4
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        3
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        2
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        1
                    </NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to="#">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
export default Pagination;