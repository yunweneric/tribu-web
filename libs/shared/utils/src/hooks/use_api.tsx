import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useLoadingBar } from 'react-top-loading-bar';

interface UseApiProps<T> {
  queryKey: string[];
  showLoader?: boolean;
  onProgress?: (progress: number) => void;
  callBack: (data?: any) => Promise<AxiosResponse<T, any>>;
}
export const get = <T,>({
  queryKey,
  onProgress,
  showLoader = true,
  callBack,
}: UseApiProps<T>) => {
  const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

  const req = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      if (showLoader) start();
      const response = await callBack();
      if (showLoader) complete();
      return response.data;
    },
  });

  return req;
};
export const post = <T,>({
  queryKey,
  showLoader = true,
  callBack,
}: UseApiProps<T>) => {
  const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

  const req = useMutation({
    mutationKey: queryKey,
    mutationFn: async (data: any) => {
      if (showLoader) start();
      const response = await callBack(data);
      if (showLoader) complete();
      return response.data;
    },
    onError: (error) => {
      if (showLoader) complete();
      console.log('error', error);
    },
    onSuccess: (data) => {
      if (showLoader) complete();
      console.log('data', data);
    },
  });

  return req;
};
export const useApi = {
  get,
  post,
};
export default useApi;

// export const useGet = ({
//   // url,
//   // method,
//   // body,
//   // headers,
//   queryKey,
//   onProgress,
//   showLoader,
//   callBack,
// }: UseApiProps) => {
//   const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

//   const req = useQuery({
//     queryKey: queryKey,
//     queryFn: async () => {
//       if (showLoader) start();

//       const response = await axios({
//         url: url,
//         method: method,
//         headers: headers,
//         data: body,
//         responseType: 'stream',
//         onDownloadProgress: (event) => {
//           const progress = (event.loaded / event.bytes) * 100;
//           if (onProgress) {
//             onProgress(progress);
//           }

//           console.log(event);
//         },
//       });

//       if (showLoader) complete();
//       return response.data;
//     },
//   });

//   return req;
// };
