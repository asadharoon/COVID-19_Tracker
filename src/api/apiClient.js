import { create } from "apisauce";
const client = create({ baseURL: "https://covid19.mathdro.id/api" });

export const getReport = async () => {
  return await client.get("/").then((r) => {
    return { data: r.data, error: !r.ok };
  });
};
export const fetchDailyData = async () => {
  try {
    const client2 = create({
      baseURL: "https://api.covidtracking.com/v1/us/daily.json",
    });
    const { data } = await client2.get("/");

    return data.map(({ positive, recovered, death, dateChecked: date }) => ({
      confirmed: positive,
      recovered,
      deaths: death,
      date,
    }));
  } catch (error) {
    return error;
  }
};
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await client.get("/countries");

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};
export const fetchData = async (country) => {
  let changeableUrl = "";

  if (country) {
    changeableUrl = "/countries/" + country;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await client.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};
