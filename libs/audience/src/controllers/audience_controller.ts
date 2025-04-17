import { PersonaDto } from '@tribu/targets';
import AudienceService from '../data/services/audience_service';

const getAudience = async ({ id, url }: { id: string; url: string }) => {
  return AudienceService.findAudienceGroupById(id, url);
};

const createAudience = async (audience: PersonaDto) => {
  return AudienceService.createAudience(audience);
};

const addPost = async (audience: any) => {
  return AudienceService.addPost(audience);
};

const AudienceController = {
  getAudience,
  createAudience,
  addPost,
};

export default AudienceController;
