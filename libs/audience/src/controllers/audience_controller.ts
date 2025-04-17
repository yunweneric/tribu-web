import { PersonaDto } from '@tribu/targets';
import AudienceRepository from '../data/repository/audience_repository';

const getAudience = async ({ id, url }: { id: string; url: string }) => {
  return AudienceRepository.findAudienceGroupById(id, url);
};

const createAudience = async (audience: PersonaDto) => {
  return AudienceRepository.createAudience(audience);
};

const addPost = async (audience: any) => {
  return AudienceRepository.addPost(audience);
};

const AudienceController = {
  getAudience,
  createAudience,
  addPost,
};

export default AudienceController;
