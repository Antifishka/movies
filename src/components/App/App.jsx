import GlobalStyles from '@mui/material/GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from "react-redux";
import authOperations from '../../redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const NewsPage = lazy(() => import('../../pages/News'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  
  return isRefreshing
    ? (<Loader/>)
    : (<>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          
          <Route path="/news"
            element={<PrivateRoute redirectTo="/login" component={<NewsPage />} />}
          />
        </Route>
      </Routes>

      <GlobalStyles />
    </>
    ); 
};
