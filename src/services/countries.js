import { checkError, client } from './client';

export async function getCountries() {
  // call supabase and get list of countries
  const response = await client.from('countries').select();
  // console.log(response);
  return checkError(response);
}
