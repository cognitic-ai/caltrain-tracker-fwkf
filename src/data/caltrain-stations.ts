export interface CaltrainStation {
  id: string;
  name: string;
  zone: number;
  latitude: number;
  longitude: number;
}

export const CALTRAIN_STATIONS: CaltrainStation[] = [
  { id: 'sf', name: 'San Francisco', zone: 1, latitude: 37.7762, longitude: -122.3942 },
  { id: '22nd', name: '22nd Street', zone: 1, latitude: 37.7573, longitude: -122.3926 },
  { id: 'bayshore', name: 'Bayshore', zone: 1, latitude: 37.7090, longitude: -122.4013 },
  { id: 'sbruno', name: 'South San Francisco', zone: 1, latitude: 37.6564, longitude: -122.4051 },
  { id: 'sanbruno', name: 'San Bruno', zone: 2, latitude: 37.6301, longitude: -122.4111 },
  { id: 'millbrae', name: 'Millbrae', zone: 2, latitude: 37.5997, longitude: -122.3867 },
  { id: 'broadway', name: 'Broadway', zone: 2, latitude: 37.5871, longitude: -122.3625 },
  { id: 'burlingame', name: 'Burlingame', zone: 2, latitude: 37.5794, longitude: -122.3450 },
  { id: 'sanmateo', name: 'San Mateo', zone: 2, latitude: 37.5682, longitude: -122.3238 },
  { id: 'haywardpark', name: 'Hayward Park', zone: 2, latitude: 37.5530, longitude: -122.3090 },
  { id: 'hillsdale', name: 'Hillsdale', zone: 2, latitude: 37.5376, longitude: -122.2970 },
  { id: 'belmont', name: 'Belmont', zone: 3, latitude: 37.5208, longitude: -122.2757 },
  { id: 'sancarlos', name: 'San Carlos', zone: 3, latitude: 37.5070, longitude: -122.2604 },
  { id: 'redwoodcity', name: 'Redwood City', zone: 3, latitude: 37.4855, longitude: -122.2316 },
  { id: 'atherton', name: 'Atherton', zone: 3, latitude: 37.4631, longitude: -122.1977 },
  { id: 'menlopark', name: 'Menlo Park', zone: 3, latitude: 37.4545, longitude: -122.1820 },
  { id: 'paloalto', name: 'Palo Alto', zone: 3, latitude: 37.4438, longitude: -122.1654 },
  { id: 'stanford', name: 'Stanford', zone: 3, latitude: 37.4294, longitude: -122.1706 },
  { id: 'caltrain', name: 'California Ave', zone: 3, latitude: 37.4294, longitude: -122.1425 },
  { id: 'sjantonio', name: 'San Antonio', zone: 4, latitude: 37.4069, longitude: -122.1068 },
  { id: 'mtview', name: 'Mountain View', zone: 4, latitude: 37.3939, longitude: -122.0766 },
  { id: 'sunnyvale', name: 'Sunnyvale', zone: 4, latitude: 37.3783, longitude: -122.0308 },
  { id: 'lawrence', name: 'Lawrence', zone: 4, latitude: 37.3706, longitude: -121.9974 },
  { id: 'santaclara', name: 'Santa Clara', zone: 4, latitude: 37.3531, longitude: -121.9363 },
  { id: 'college', name: 'College Park', zone: 4, latitude: 37.3425, longitude: -121.9145 },
  { id: 'sanjose', name: 'San Jose Diridon', zone: 4, latitude: 37.3297, longitude: -121.9026 },
  { id: 'tamien', name: 'Tamien', zone: 4, latitude: 37.3119, longitude: -121.8844 },
  { id: 'capitol', name: 'Capitol', zone: 5, latitude: 37.2882, longitude: -121.8421 },
  { id: 'blossom', name: 'Blossom Hill', zone: 6, latitude: 37.2523, longitude: -121.7973 },
  { id: 'morgan', name: 'Morgan Hill', zone: 6, latitude: 37.1298, longitude: -121.6505 },
  { id: 'san-martin', name: 'San Martin', zone: 6, latitude: 37.0851, longitude: -121.6107 },
  { id: 'gilroy', name: 'Gilroy', zone: 6, latitude: 37.0035, longitude: -121.5668 },
];
