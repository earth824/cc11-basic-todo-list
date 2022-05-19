import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../stores/auth';

function Header() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todo List App
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <div
                    className="nav-link"
                    role="button"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
