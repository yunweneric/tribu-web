import { PersonaDto } from '@tribu/targets';
import { http } from '@tribu/utils';

const findAudienceGroupById = async (id: string, url: string) => {
  return await http.run({
    url: url,
    method: 'GET',
    queryKey: ['audience', id],
    onProgress: (progress) => {
      console.log(progress);
    },
  });
};

const createAudience = async (audience: PersonaDto) => {
  return await http.run({
    url: '',
    method: 'POST',
    body: audience,
    queryKey: ['audience'],
    onProgress: (progress) => {
      console.log(progress);
    },
  });
};
const AudienceService = {
  findAudienceGroupById,
  createAudience,
};

export default AudienceService;
