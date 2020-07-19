import {PregnancyOvulation} from './PregnancyOvulation';
import {HealthAndDiet} from './HealthAndDiet';
import {FlowHealth} from './FlowHealth';

export interface Preference {
  medicationReminder: boolean;
  birthControlReminder: boolean;
  fertilityReminders: boolean;
  bodyTemperatureInformation: boolean;
  gynecologicalIssues: boolean;
  articles: boolean;
  recipes: boolean;
  habitTracker: boolean;
  lengthOfPeriod: boolean;
  dateOfLastPeriod: boolean;
  lengthOfCycle: boolean;
  height: boolean;
  weight: boolean;
  pmsSymptoms: boolean;
  dailyJournalReminder: boolean;
  mentalHealthReminder: boolean;
  mentalHealthMedication: string
}
