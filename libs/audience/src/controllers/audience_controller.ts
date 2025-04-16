import AudienceRepository from '../data/repository/audience_repository';

const getAudience = async ({ id, url }: { id: string; url: string }) => {
  return AudienceRepository.findAudienceGroupById(id, url);
};

const AudienceController = {
  getAudience,
};

export default AudienceController;
