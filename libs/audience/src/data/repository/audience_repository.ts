import { PersonaDto } from '@tribu/targets';
import AudienceService from '../services/audience_service';
import { CreateAudience } from '../interfaces/create_audience';
import { AxiosResponse } from 'axios';

interface Audience {
  id: string;
  name: string;
  age: number;
  // Add more fields as needed
}

const getAudiences = async () => {
  return AudienceService.getAudiences();
};
const findAudienceGroupById = async (id: string) => {
  return AudienceService.findAudienceGroupById(id);
};

const createAudience = async (
  audience: CreateAudience
): Promise<AxiosResponse<CreateAudience, any>> => {
  return AudienceService.createAudience(audience);
};

const addPost = async (audience: any) => {
  return AudienceService.addPost(audience);
};
const AudienceRepository = {
  findAudienceGroupById,
  createAudience,
  addPost,
  getAudiences,
};

export default AudienceRepository;
