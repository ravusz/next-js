import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { theme } from '../src/styles/theme'
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider >
    </>
  )
}

export default MyApp
