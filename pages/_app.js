import * as system from "reakit-system-bootstrap";
import { Provider } from "reakit";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider unstable_system={system}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
