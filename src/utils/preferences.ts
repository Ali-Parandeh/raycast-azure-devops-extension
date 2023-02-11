import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  token: string;
  orgName: string;
}

const preferences: Preferences = getPreferenceValues();

export default preferences;
