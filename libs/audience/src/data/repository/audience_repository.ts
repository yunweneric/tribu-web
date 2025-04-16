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
const AudienceRepository = {
  findAudienceGroupById,
};

export default AudienceRepository;
