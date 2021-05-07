import classes from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../store/index';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);

  const logout = () => {
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
      {auth && ( 
        <ul>
              <li>           
                <a href='/'>My Products</a>
              </li>
              <li>
                <a href='/'>My Sales</a>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              
        </ul>

)}

      </nav>
    </header>
  );
};

export default Header;
