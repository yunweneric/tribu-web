import { PersonaDto } from '@tribu/targets';
import { http } from '@tribu/utils';
import { CreateAudience } from '../interfaces/create_audience';

const getAudiences = async () => {
  return await http.run({
    url: '/',
    method: 'GET',
    queryKey: [],
  });
};
const findAudienceGroupById = async (id: string) => {
  return await http.run({
    url: '/',
    method: 'GET',
    queryKey: ['audience', id],
  });
};

const createAudience = async (audience: CreateAudience) => {
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
  getAudiences,
};

export default AudienceService;
