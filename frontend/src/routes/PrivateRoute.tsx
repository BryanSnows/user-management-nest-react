import { RouteProps, Outlet, Navigate } from 'react-router-dom';
import { getDecodedToken } from '../common/utils/auth';

type TPrivateRoute = {
  transactions: number[];
};

type TPrivateRouteExtended = TPrivateRoute & RouteProps;

export function isAllowedTransaction(transactionNumbers?: number[]): boolean {
  if (!transactionNumbers) {
    return true;
  }

  const decoded_access_token = getDecodedToken();

  if (decoded_access_token?.profile_id === 0) {
    return true;
  }

  if (!decoded_access_token?.profile_status) {
    return false;
  }

  const userTransactions = decoded_access_token?.transactions;

  return (
    userTransactions?.some((userTransaction) => transactionNumbers.includes(userTransaction)) ||
    false
  );
}

export function PrivateRoute({ transactions, element }: TPrivateRouteExtended) {
  if (isAllowedTransaction(transactions)) {
    if (element) {
      return <>{element}</>;
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/home" />;
  }
}

export function ProtectedRoutes() {
  const decoded_access_token = getDecodedToken();

  if (!decoded_access_token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
