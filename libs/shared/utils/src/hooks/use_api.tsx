import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLoadingBar } from 'react-top-loading-bar';

interface UseApiProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  queryKey: string[];
  body?: any;
  showLoader?: boolean;
  headers?: any;
  onProgress?: (progress: number) => void;
}
export const useGet = ({
  url,
  method,
  body,
  headers,
  queryKey,
  onProgress,
  showLoader,
}: UseApiProps) => {
  const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

  const req = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      if (showLoader) start();
      const response = await axios({
        url: url,
        method: method,
        headers: headers,
        data: body,
        responseType: 'stream',
        onDownloadProgress: (event) => {
          const progress = (event.loaded / event.bytes) * 100;
          if (onProgress) {
            onProgress(progress);
          }

          console.log(event);
        },
      });

      if (showLoader) complete();
      return response.data;
    },
  });

  return req;
};
export const useMutationRequest = ({
  url,
  method,
  body,
  headers,
  queryKey,
  onProgress,
  showLoader,
}: UseApiProps) => {
  const { start, complete } = useLoadingBar({ color: 'green', height: 2 });

  const req = useMutation({
    mutationKey: queryKey,
    mutationFn: async () => {
      if (showLoader) start();
      const response = await axios({
        url: url,
        method: method,
        headers: headers,
        data: body,
        responseType: 'stream',
        onDownloadProgress: (event) => {
          const progress = (event.loaded / event.bytes) * 100;
          if (onProgress) {
            onProgress(progress);
          }
        },
      });
      if (showLoader) complete();
      return response.data;
    },
  });

  return req;
};

export default { useGet, useMutationRequest };
