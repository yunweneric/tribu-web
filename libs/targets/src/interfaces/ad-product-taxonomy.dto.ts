export interface IAdProductTaxonomyCategory {
  name: string;
  parentId?: string | null;
  tier1?: string;
  tier2?: string;
  tier3?: string;
  tier4?: string;
  tier5?: string;
  tier6?: string;
  children?: string[];
}
