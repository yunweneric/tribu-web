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
    url: 'https://jsonplaceholder.typicode.com/',
    method: 'POST',
    body: audience,
    queryKey: ['audience'],
  });
};

const addPost = async (data: any) => {
  return await http.run({
    url: 'https://jsonplaceholder.typicode.com/posts',
    method: 'POST',
    body: data,
    queryKey: ['data'],
  });
};
const AudienceService = {
  findAudienceGroupById,
  createAudience,
  addPost,
};

export default AudienceService;
