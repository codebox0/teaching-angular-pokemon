export class Pokemon {
  id?: number;
  url?: string;
  results?: any;
  abilities: any[];
  base_experience: number;
  forms: [{
    name: string;
    url: string;
  }];
  game_indices: [{
    game_index: number;
    version: [{
      name: string;
      url: string;
    }]
  }];
  height: string;
  held_items: string;
  is_default: boolean;
  location_area_encounters: string;
  moves: [{
    move: [{
      name: string;
      url: string;
    }];
    version_group_details: any[];
  }];
  name: string;
  order: number;
  species: [{
    name: string;
    url: string;
  }];
  sprites: any[];
  stats: any[];
  types: any[];
  weight: number;
}
