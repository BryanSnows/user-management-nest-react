import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../../assets/styles/global';
import { AuthProvider } from '../../context/AuthProvider';
import { Routes } from '../../routes';
import { theme } from '../../assets/styles/themes/theme';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import ToastProvider from '../../context/ToastContext';
import { Toast } from '../Toast';
import { PageProvider } from '../../context/PageContext';
import { isUserLoggedIn } from '../../common/utils/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  useEffect(() => {
    if (isUserLoggedIn() && window.location.pathname === '/login') {
      window.location.href = '/home';
    }
  }, []);

  window.addEventListener('storage', (event) => {
    if (event.key === 'is_logged_in' && event.newValue) {
      window.location.href = '/';
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <LanguageSwitcher /> */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <ToastProvider>
            <AuthProvider>
              <PageProvider>
                <Toast>
                  <Routes />
                </Toast>
              </PageProvider>
            </AuthProvider>
          </ToastProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
