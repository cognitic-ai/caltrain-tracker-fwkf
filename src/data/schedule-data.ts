export interface TrainSchedule {
  trainNumber: string;
  type: 'Local' | 'Limited' | 'Express';
  direction: 'Northbound' | 'Southbound';
  stops: {
    stationId: string;
    arrivalTime: string;
    departureTime: string;
  }[];
}

// Sample weekday morning schedules (simplified)
export const SAMPLE_SCHEDULES: TrainSchedule[] = [
  {
    trainNumber: '101',
    type: 'Local',
    direction: 'Northbound',
    stops: [
      { stationId: 'gilroy', arrivalTime: '5:00', departureTime: '5:00' },
      { stationId: 'morgan', arrivalTime: '5:23', departureTime: '5:23' },
      { stationId: 'blossom', arrivalTime: '5:43', departureTime: '5:43' },
      { stationId: 'tamien', arrivalTime: '5:53', departureTime: '5:53' },
      { stationId: 'sanjose', arrivalTime: '5:58', departureTime: '5:58' },
      { stationId: 'santaclara', arrivalTime: '6:05', departureTime: '6:05' },
      { stationId: 'sunnyvale', arrivalTime: '6:12', departureTime: '6:12' },
      { stationId: 'mtview', arrivalTime: '6:18', departureTime: '6:18' },
      { stationId: 'paloalto', arrivalTime: '6:28', departureTime: '6:28' },
      { stationId: 'menlopark', arrivalTime: '6:32', departureTime: '6:32' },
      { stationId: 'redwoodcity', arrivalTime: '6:38', departureTime: '6:38' },
      { stationId: 'sanmateo', arrivalTime: '6:47', departureTime: '6:47' },
      { stationId: 'millbrae', arrivalTime: '6:56', departureTime: '6:56' },
      { stationId: '22nd', arrivalTime: '7:12', departureTime: '7:12' },
      { stationId: 'sf', arrivalTime: '7:17', departureTime: '7:17' },
    ],
  },
  {
    trainNumber: '103',
    type: 'Limited',
    direction: 'Northbound',
    stops: [
      { stationId: 'sanjose', arrivalTime: '6:15', departureTime: '6:15' },
      { stationId: 'santaclara', arrivalTime: '6:20', departureTime: '6:20' },
      { stationId: 'sunnyvale', arrivalTime: '6:26', departureTime: '6:26' },
      { stationId: 'mtview', arrivalTime: '6:31', departureTime: '6:31' },
      { stationId: 'paloalto', arrivalTime: '6:39', departureTime: '6:39' },
      { stationId: 'redwoodcity', arrivalTime: '6:48', departureTime: '6:48' },
      { stationId: 'sanmateo', arrivalTime: '6:55', departureTime: '6:55' },
      { stationId: 'millbrae', arrivalTime: '7:02', departureTime: '7:02' },
      { stationId: '22nd', arrivalTime: '7:16', departureTime: '7:16' },
      { stationId: 'sf', arrivalTime: '7:21', departureTime: '7:21' },
    ],
  },
  {
    trainNumber: '201',
    type: 'Local',
    direction: 'Southbound',
    stops: [
      { stationId: 'sf', arrivalTime: '6:00', departureTime: '6:00' },
      { stationId: '22nd', arrivalTime: '6:05', departureTime: '6:05' },
      { stationId: 'millbrae', arrivalTime: '6:21', departureTime: '6:21' },
      { stationId: 'sanmateo', arrivalTime: '6:30', departureTime: '6:30' },
      { stationId: 'redwoodcity', arrivalTime: '6:39', departureTime: '6:39' },
      { stationId: 'menlopark', arrivalTime: '6:45', departureTime: '6:45' },
      { stationId: 'paloalto', arrivalTime: '6:49', departureTime: '6:49' },
      { stationId: 'mtview', arrivalTime: '6:59', departureTime: '6:59' },
      { stationId: 'sunnyvale', arrivalTime: '7:05', departureTime: '7:05' },
      { stationId: 'santaclara', arrivalTime: '7:12', departureTime: '7:12' },
      { stationId: 'sanjose', arrivalTime: '7:19', departureTime: '7:19' },
      { stationId: 'tamien', arrivalTime: '7:24', departureTime: '7:24' },
    ],
  },
  {
    trainNumber: '203',
    type: 'Limited',
    direction: 'Southbound',
    stops: [
      { stationId: 'sf', arrivalTime: '7:00', departureTime: '7:00' },
      { stationId: '22nd', arrivalTime: '7:05', departureTime: '7:05' },
      { stationId: 'millbrae', arrivalTime: '7:19', departureTime: '7:19' },
      { stationId: 'sanmateo', arrivalTime: '7:26', departureTime: '7:26' },
      { stationId: 'redwoodcity', arrivalTime: '7:33', departureTime: '7:33' },
      { stationId: 'paloalto', arrivalTime: '7:42', departureTime: '7:42' },
      { stationId: 'mtview', arrivalTime: '7:50', departureTime: '7:50' },
      { stationId: 'sunnyvale', arrivalTime: '7:56', departureTime: '7:56' },
      { stationId: 'santaclara', arrivalTime: '8:02', departureTime: '8:02' },
      { stationId: 'sanjose', arrivalTime: '8:09', departureTime: '8:09' },
    ],
  },
];
