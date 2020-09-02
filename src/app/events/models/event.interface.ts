export interface EventDefinition {
  id: string;
  name: string;
  startDate: number;
  endDate?: number;
  description: string;
  location: string;
}

export type EventsType = 'upcoming' | 'past';
