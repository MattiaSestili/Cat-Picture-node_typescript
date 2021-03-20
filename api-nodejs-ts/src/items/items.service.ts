import fetch from "node-fetch"

export interface ICatPicture {
  breeds: any[],
  height: number,
  id: string,
  url: string
  width: number
}

export const fetchRandomPicture = async (): Promise<ICatPicture[]> => {
  const jsonResponse = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1`, {
    headers: {
      'Content-type': 'application/json',
      'x-api-key': `${process.env.APIKEY}`
    }
  });
  console.log(jsonResponse)
  const items: ICatPicture[] = await jsonResponse.json();
  return items;
};