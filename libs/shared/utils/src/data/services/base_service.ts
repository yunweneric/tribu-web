import axios from 'axios';

interface ApiProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  queryKey: string[];
  body?: any;
  showLoader?: boolean;
  headers?: any;
  onProgress?: (progress: number) => void;
}
export const get = ({ url, method, headers, body, onProgress }: ApiProps) => {
  return axios({
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
};
export const http = {
  get,
};

export default http;
