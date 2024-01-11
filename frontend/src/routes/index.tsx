import { Routes as RoutesWrapper, Route, Navigate, Outlet } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Users } from '../pages/UserManagement/Users';
import { NewUser } from '../pages/UserManagement/Users/NewUser';
import { Layout } from '../components/Layout';
import { PrivateRoute, ProtectedRoutes } from './PrivateRoute';
import { UserTransaction } from '../common/transactions-enums/user.transaction';

export function Routes() {
  const SidebarLayout = () => (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );

  return (
    <>
      <RoutesWrapper>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route element={<SidebarLayout />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/user-management"
              element={<PrivateRoute transactions={UserTransaction.READ} />}
            >
              <Route path="users">
                <Route path="" element={<Users />} />
                <Route
                  path="new"
                  element={
                    <PrivateRoute transactions={UserTransaction.CREATE} element={<NewUser />} />
                  }
                />
              </Route>
            </Route>
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </RoutesWrapper>
    </>
  );
}
