export type Passenger = {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
};

export type CountrySection = {
  country: string;
  data: Passenger[];
};

export function organizeByCountry(passengers: Passenger[]): CountrySection[] {
  const countryMap: { [key: string]: Passenger[] } = {};

  passengers.forEach((passenger) => {
    if (!countryMap[passenger.origin]) {
      countryMap[passenger.origin] = [];
    }
    countryMap[passenger.origin].push(passenger);

    if (!countryMap[passenger.destination]) {
      countryMap[passenger.destination] = [];
    }
    countryMap[passenger.destination].push(passenger);
  });

  return Object.entries(countryMap)
    .map(([country, data]) => ({
      country,
      data,
    }))
    .sort((a, b) => a.country.localeCompare(b.country));
}
