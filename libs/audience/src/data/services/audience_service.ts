import { http } from '@tribu/utils';

const findAudienceGroupById = async (id: string, url: string) => {
  return await http.get({
    url: url,
    method: 'GET',
    queryKey: ['audience', id],
    onProgress: (progress) => {
      console.log(progress);
    },
  });
};
const AudienceService = {
  findAudienceGroupById,
};

export default AudienceService;
