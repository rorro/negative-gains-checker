import { OSRSDetails } from '../types';

export async function fetchOSRSDetails(
  username: string,
  account_type: string
): Promise<OSRSDetails | string> {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}${username}/${account_type}`);

    if (!res.ok) throw new Error(`Error: Player '${username}' was not found on OSRS hiscores!`);
    else return (await res.json()) as OSRSDetails;
  } catch (error: any) {
    return error.message;
  }
}
