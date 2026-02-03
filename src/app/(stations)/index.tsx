import { ScrollView, View, Text } from 'react-native';
import * as AC from '@bacons/apple-colors';
import { CALTRAIN_STATIONS } from '@/data/caltrain-stations';

export default function StationsScreen() {
  // Group stations by zone
  const stationsByZone = CALTRAIN_STATIONS.reduce((acc, station) => {
    if (!acc[station.zone]) {
      acc[station.zone] = [];
    }
    acc[station.zone].push(station);
    return acc;
  }, {} as Record<number, typeof CALTRAIN_STATIONS>);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ padding: 16, gap: 24 }}>
        {Object.entries(stationsByZone).map(([zone, stations]) => (
          <View key={zone} style={{ gap: 12 }}>
            <Text style={{
              fontSize: 22,
              fontWeight: '700',
              color: AC.label,
              paddingLeft: 4,
            }}>
              Zone {zone}
            </Text>
            <View style={{
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 12,
              borderCurve: 'continuous',
              overflow: 'hidden',
            }}>
              {stations.map((station, idx) => (
                <View
                  key={station.id}
                  style={{
                    padding: 16,
                    borderTopWidth: idx > 0 ? 0.5 : 0,
                    borderTopColor: AC.separator,
                    gap: 6,
                  }}
                >
                  <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    color: AC.label
                  }}>
                    {station.name}
                  </Text>
                  <Text style={{
                    fontSize: 13,
                    color: AC.secondaryLabel,
                    selectable: true,
                  }}>
                    {station.latitude.toFixed(4)}, {station.longitude.toFixed(4)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
