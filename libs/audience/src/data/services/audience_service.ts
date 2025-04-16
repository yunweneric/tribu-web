const findAudienceGroupById = async (id: string): Promise<AudienceGroupDto> => {
  const response = await audienceService.getAudienceGroup(id);
  return response.data;
};
