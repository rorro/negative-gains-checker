import { PlayerDetails } from '@wise-old-man/utils';

const BASE_API_URL = 'https://api.wiseoldman.net/v2/players';

export async function fetchWOMDetails(username: string): Promise<PlayerDetails | string> {
  try {
    const res = await fetch(`${BASE_API_URL}/${username}`);

    if (!res.ok) throw new Error(`Error: Player '${username}' was not found on Wise Old Man!`);
    else return (await res.json()) as PlayerDetails;
  } catch (error: any) {
    return error.message;
  }
}
