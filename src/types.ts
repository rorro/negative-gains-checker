export enum ToastType {
  Error = 1,
  Success = 2
}

export enum SelectedType {
  Skills = 'Skills',
  Bosses = 'Bosses',
  Activities = 'Activities'
}

export interface OSRSSkill {
  id: number;
  name: string;
  rank: number;
  level: number;
  xp: number;
}

export interface OSRSActivity {
  id: number;
  name: string;
  rank: number;
  score: number;
}

export interface OSRSDetails {
  skills: OSRSSkill[];
  activities: OSRSActivity[];
}
