import { PersonaDto } from '@tribu/targets';
import AudienceService from '../services/audience_service';

interface Audience {
  id: string;
  name: string;
  age: number;
  // Add more fields as needed
}

const findAudienceGroupById = async (id: string, url: string) => {
  return AudienceService.findAudienceGroupById(id, url);
};

const createAudience = async (audience: PersonaDto) => {
  return AudienceService.createAudience(audience);
};

const addPost = async (audience: any) => {
  return AudienceService.addPost(audience);
};
const AudienceRepository = {
  findAudienceGroupById,
  createAudience,
  addPost,
};

export default AudienceRepository;
