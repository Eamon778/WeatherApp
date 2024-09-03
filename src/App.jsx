import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Weather from "./Weather";

const queryClient = new QueryClient();

function App(){

  return(
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  )
}

export default App;