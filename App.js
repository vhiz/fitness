import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import Navigation from "./src/navigation/Navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
