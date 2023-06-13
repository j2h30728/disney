import type { QueryFunctionContext } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

import { BASE_URL } from '../api/ApiUrl';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  return await (await fetch(`${BASE_URL}${queryKey.join('/')}`)).json();
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
export default queryClient;
