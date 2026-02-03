import { ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import * as AC from '@bacons/apple-colors';
import { CALTRAIN_STATIONS } from '@/data/caltrain-stations';
import { SAMPLE_SCHEDULES } from '@/data/schedule-data';

export default function TripPlannerScreen() {
  const [fromStation, setFromStation] = useState('sf');
  const [toStation, setToStation] = useState('sanjose');
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const from = CALTRAIN_STATIONS.find(s => s.id === fromStation);
  const to = CALTRAIN_STATIONS.find(s => s.id === toStation);

  // Find trains that connect these stations
  const trips = SAMPLE_SCHEDULES.filter(train => {
    const fromIdx = train.stops.findIndex(s => s.stationId === fromStation);
    const toIdx = train.stops.findIndex(s => s.stationId === toStation);
    return fromIdx !== -1 && toIdx !== -1 && fromIdx < toIdx;
  }).map(train => {
    const fromStop = train.stops.find(s => s.stationId === fromStation)!;
    const toStop = train.stops.find(s => s.stationId === toStation)!;
    return {
      ...train,
      departTime: fromStop.departureTime,
      arriveTime: toStop.arrivalTime,
    };
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ padding: 16, gap: 20 }}>
        {/* From Station */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            From
          </Text>
          <Pressable
            onPress={() => setShowFromPicker(!showFromPicker)}
            style={{
              padding: 16,
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 12,
              borderCurve: 'continuous',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{
                fontSize: 20,
                fontWeight: '600',
                color: AC.label
              }}>
                {from?.name}
              </Text>
              <Text style={{
                fontSize: 13,
                color: AC.secondaryLabel
              }}>
                Zone {from?.zone}
              </Text>
            </View>
            <Text style={{
              fontSize: 20,
              color: AC.secondaryLabel
            }}>
              {showFromPicker ? '▴' : '▾'}
            </Text>
          </Pressable>

          {showFromPicker && (
            <View style={{
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 12,
              borderCurve: 'continuous',
              overflow: 'hidden',
              maxHeight: 300,
            }}>
              <ScrollView>
                {CALTRAIN_STATIONS.map((station, idx) => (
                  <Pressable
                    key={station.id}
                    onPress={() => {
                      setFromStation(station.id);
                      setShowFromPicker(false);
                    }}
                    style={({ pressed }) => ({
                      padding: 16,
                      backgroundColor: pressed
                        ? AC.tertiarySystemGroupedBackground
                        : AC.secondarySystemGroupedBackground,
                      borderTopWidth: idx > 0 ? 0.5 : 0,
                      borderTopColor: AC.separator,
                    })}
                  >
                    <Text style={{
                      fontSize: 17,
                      color: AC.label,
                      fontWeight: fromStation === station.id ? '600' : '400',
                    }}>
                      {station.name}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}
        </View>

        {/* Swap Button */}
        <Pressable
          onPress={() => {
            const temp = fromStation;
            setFromStation(toStation);
            setToStation(temp);
          }}
          style={{
            alignSelf: 'center',
            padding: 12,
            backgroundColor: AC.systemBlue,
            borderRadius: 24,
            borderCurve: 'continuous',
          }}
        >
          <Text style={{
            fontSize: 24,
            color: AC.systemBackground,
          }}>
            ⇅
          </Text>
        </Pressable>

        {/* To Station */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            To
          </Text>
          <Pressable
            onPress={() => setShowToPicker(!showToPicker)}
            style={{
              padding: 16,
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 12,
              borderCurve: 'continuous',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{
                fontSize: 20,
                fontWeight: '600',
                color: AC.label
              }}>
                {to?.name}
              </Text>
              <Text style={{
                fontSize: 13,
                color: AC.secondaryLabel
              }}>
                Zone {to?.zone}
              </Text>
            </View>
            <Text style={{
              fontSize: 20,
              color: AC.secondaryLabel
            }}>
              {showToPicker ? '▴' : '▾'}
            </Text>
          </Pressable>

          {showToPicker && (
            <View style={{
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 12,
              borderCurve: 'continuous',
              overflow: 'hidden',
              maxHeight: 300,
            }}>
              <ScrollView>
                {CALTRAIN_STATIONS.map((station, idx) => (
                  <Pressable
                    key={station.id}
                    onPress={() => {
                      setToStation(station.id);
                      setShowToPicker(false);
                    }}
                    style={({ pressed }) => ({
                      padding: 16,
                      backgroundColor: pressed
                        ? AC.tertiarySystemGroupedBackground
                        : AC.secondarySystemGroupedBackground,
                      borderTopWidth: idx > 0 ? 0.5 : 0,
                      borderTopColor: AC.separator,
                    })}
                  >
                    <Text style={{
                      fontSize: 17,
                      color: AC.label,
                      fontWeight: toStation === station.id ? '600' : '400',
                    }}>
                      {station.name}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
          )}
        </View>

        {/* Trip Results */}
        <View style={{ gap: 12 }}>
          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: AC.label
          }}>
            Available Trips
          </Text>
          <View style={{
            backgroundColor: AC.secondarySystemGroupedBackground,
            borderRadius: 12,
            borderCurve: 'continuous',
            overflow: 'hidden',
          }}>
            {trips.length === 0 ? (
              <View style={{ padding: 32, alignItems: 'center' }}>
                <Text style={{
                  fontSize: 15,
                  color: AC.secondaryLabel,
                  textAlign: 'center',
                }}>
                  No direct trips found between these stations
                </Text>
              </View>
            ) : (
              trips.map((trip, idx) => (
                <View
                  key={trip.trainNumber}
                  style={{
                    padding: 16,
                    borderTopWidth: idx > 0 ? 0.5 : 0,
                    borderTopColor: AC.separator,
                    gap: 12,
                  }}
                >
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <View style={{ gap: 6 }}>
                      <Text style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: AC.label
                      }}>
                        Train {trip.trainNumber}
                      </Text>
                      <View style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        backgroundColor: trip.type === 'Local'
                          ? AC.systemGreen
                          : trip.type === 'Limited'
                          ? AC.systemOrange
                          : AC.systemRed,
                        borderRadius: 6,
                        borderCurve: 'continuous',
                        alignSelf: 'flex-start',
                      }}>
                        <Text style={{
                          fontSize: 12,
                          fontWeight: '600',
                          color: '#FFFFFF',
                        }}>
                          {trip.type}
                        </Text>
                      </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', gap: 4 }}>
                      <Text style={{
                        fontSize: 13,
                        color: AC.secondaryLabel
                      }}>
                        Duration
                      </Text>
                      <Text style={{
                        fontSize: 17,
                        fontWeight: '600',
                        color: AC.label,
                        fontVariant: ['tabular-nums'],
                      }}>
                        {calculateDuration(trip.departTime, trip.arriveTime)}
                      </Text>
                    </View>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 12,
                    borderTopWidth: 0.5,
                    borderTopColor: AC.separator,
                  }}>
                    <View style={{ gap: 4 }}>
                      <Text style={{
                        fontSize: 13,
                        color: AC.secondaryLabel
                      }}>
                        Depart
                      </Text>
                      <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        color: AC.label,
                        fontVariant: ['tabular-nums'],
                      }}>
                        {trip.departTime}
                      </Text>
                    </View>
                    <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Text style={{
                        fontSize: 20,
                        color: AC.secondaryLabel
                      }}>
                        →
                      </Text>
                    </View>
                    <View style={{ gap: 4, alignItems: 'flex-end' }}>
                      <Text style={{
                        fontSize: 13,
                        color: AC.secondaryLabel
                      }}>
                        Arrive
                      </Text>
                      <Text style={{
                        fontSize: 24,
                        fontWeight: '600',
                        color: AC.label,
                        fontVariant: ['tabular-nums'],
                      }}>
                        {trip.arriveTime}
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function calculateDuration(start: string, end: string): string {
  const [startH, startM] = start.split(':').map(Number);
  const [endH, endM] = end.split(':').map(Number);

  let totalMinutes = (endH * 60 + endM) - (startH * 60 + startM);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
}
