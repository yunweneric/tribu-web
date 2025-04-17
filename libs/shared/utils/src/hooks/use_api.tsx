import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useLoadingBar } from 'react-top-loading-bar';

interface UseApiProps {
  queryKey: string[];
  showLoader?: boolean;
  onProgress?: (progress: number) => void;
  callBack: (data?: any) => Promise<AxiosResponse<any, any>>;
}
export const get = ({
  queryKey,
  onProgress,
  showLoader = true,
  callBack,
}: UseApiProps) => {
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
export const post = ({
  queryKey,
  showLoader = true,
  callBack,
}: UseApiProps) => {
  const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

  const req = useMutation({
    mutationKey: queryKey,
    mutationFn: async (data: any) => {
      if (showLoader) start();
      const response = await callBack(data);
      if (showLoader) complete();
      return response.data;
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
