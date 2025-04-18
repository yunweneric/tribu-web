// import AudienceService from '../data/services/audience_service';
import AudienceRepository from '../data/repository/audience_repository';
import { CreateAudience } from '../data/interfaces/create_audience';

const getAudience = async () => {
  return AudienceRepository.getAudiences();
};

const findAudienceGroupById = async (id: string) => {
  return AudienceRepository.findAudienceGroupById(id);
};

const createAudience = async (audience: CreateAudience) => {
  return AudienceRepository.createAudience(audience);
};

const addPost = async (audience: any) => {
  return AudienceRepository.addPost(audience);
};

const AudienceController = {
  getAudience,
  createAudience,
  findAudienceGroupById,
  addPost,
};

export default AudienceController;
