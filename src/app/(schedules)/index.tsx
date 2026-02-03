import { ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import * as AC from '@bacons/apple-colors';
import { CALTRAIN_STATIONS } from '@/data/caltrain-stations';
import { SAMPLE_SCHEDULES } from '@/data/schedule-data';

export default function SchedulesScreen() {
  const [selectedStation, setSelectedStation] = useState('sf');
  const [direction, setDirection] = useState<'Northbound' | 'Southbound'>('Northbound');

  const station = CALTRAIN_STATIONS.find(s => s.id === selectedStation);

  // Get trains that stop at this station
  const trainsAtStation = SAMPLE_SCHEDULES.filter(
    train => train.direction === direction &&
    train.stops.some(stop => stop.stationId === selectedStation)
  ).map(train => {
    const stop = train.stops.find(s => s.stationId === selectedStation);
    return {
      ...train,
      time: stop?.departureTime || '',
    };
  }).sort((a, b) => a.time.localeCompare(b.time));

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ padding: 16, gap: 20 }}>
        {/* Station Selector */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            Select Station
          </Text>
          <View style={{
            backgroundColor: AC.secondarySystemGroupedBackground,
            borderRadius: 12,
            borderCurve: 'continuous',
            overflow: 'hidden',
          }}>
            {CALTRAIN_STATIONS.slice(0, 10).map((s, idx) => (
              <Pressable
                key={s.id}
                onPress={() => setSelectedStation(s.id)}
                style={({ pressed }) => ({
                  padding: 16,
                  backgroundColor: pressed
                    ? AC.tertiarySystemGroupedBackground
                    : selectedStation === s.id
                    ? AC.systemBlue + '20'
                    : AC.secondarySystemGroupedBackground,
                  borderTopWidth: idx > 0 ? 0.5 : 0,
                  borderTopColor: AC.separator,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <View style={{ gap: 4 }}>
                  <Text style={{
                    fontSize: 17,
                    color: AC.label,
                    fontWeight: selectedStation === s.id ? '600' : '400',
                  }}>
                    {s.name}
                  </Text>
                  <Text style={{
                    fontSize: 13,
                    color: AC.secondaryLabel
                  }}>
                    Zone {s.zone}
                  </Text>
                </View>
                {selectedStation === s.id && (
                  <Text style={{
                    fontSize: 20,
                    color: AC.systemBlue
                  }}>
                    ✓
                  </Text>
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Direction Toggle */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            Direction
          </Text>
          <View style={{
            flexDirection: 'row',
            gap: 12
          }}>
            <Pressable
              onPress={() => setDirection('Northbound')}
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: direction === 'Northbound'
                  ? AC.systemBlue
                  : AC.secondarySystemGroupedBackground,
                borderRadius: 12,
                borderCurve: 'continuous',
                alignItems: 'center',
              }}
            >
              <Text style={{
                fontSize: 17,
                fontWeight: '600',
                color: direction === 'Northbound'
                  ? AC.systemBackground
                  : AC.label,
              }}>
                Northbound
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setDirection('Southbound')}
              style={{
                flex: 1,
                padding: 16,
                backgroundColor: direction === 'Southbound'
                  ? AC.systemBlue
                  : AC.secondarySystemGroupedBackground,
                borderRadius: 12,
                borderCurve: 'continuous',
                alignItems: 'center',
              }}
            >
              <Text style={{
                fontSize: 17,
                fontWeight: '600',
                color: direction === 'Southbound'
                  ? AC.systemBackground
                  : AC.label,
              }}>
                Southbound
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Train Schedule */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            Next Trains at {station?.name}
          </Text>
          <View style={{
            backgroundColor: AC.secondarySystemGroupedBackground,
            borderRadius: 12,
            borderCurve: 'continuous',
            overflow: 'hidden',
          }}>
            {trainsAtStation.length === 0 ? (
              <View style={{ padding: 32, alignItems: 'center' }}>
                <Text style={{
                  fontSize: 15,
                  color: AC.secondaryLabel,
                  textAlign: 'center',
                }}>
                  No trains found for this station and direction
                </Text>
              </View>
            ) : (
              trainsAtStation.map((train, idx) => (
                <View
                  key={train.trainNumber}
                  style={{
                    padding: 16,
                    borderTopWidth: idx > 0 ? 0.5 : 0,
                    borderTopColor: AC.separator,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View style={{ gap: 6 }}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: AC.label
                    }}>
                      Train {train.trainNumber}
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 8 }}>
                      <View style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        backgroundColor: train.type === 'Local'
                          ? AC.systemGreen
                          : train.type === 'Limited'
                          ? AC.systemOrange
                          : AC.systemRed,
                        borderRadius: 6,
                        borderCurve: 'continuous',
                      }}>
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          color: '#FFFFFF',
                        }}>
                          {train.type}
                        </Text>
                      </View>
                      <Text style={{
                        fontSize: 13,
                        color: AC.secondaryLabel
                      }}>
                        {train.stops.length} stops
                      </Text>
                    </View>
                  </View>
                  <Text style={{
                    fontSize: 28,
                    fontWeight: '600',
                    color: AC.label,
                    fontVariant: ['tabular-nums'],
                  }}>
                    {train.time}
                  </Text>
                </View>
              ))
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
