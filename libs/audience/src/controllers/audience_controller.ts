import { PersonaDto } from '@tribu/targets';
import AudienceRepository from '../data/repository/audience_repository';

const getAudience = async ({ id, url }: { id: string; url: string }) => {
  return AudienceRepository.findAudienceGroupById(id, url);
};

const createAudience = async (audience: PersonaDto) => {
  return AudienceRepository.createAudience(audience);
};

const AudienceController = {
  getAudience,
  createAudience,
};

export default AudienceController;
