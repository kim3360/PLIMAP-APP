import {useRef} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DEFAULT_MAP_REGION} from '../../../config/maps';

const ZOOM_STEP = 1;

export function PlimapMapScreen() {
  const mapRef = useRef<MapView>(null);
  const insets = useSafeAreaInsets();

  const zoomBy = async (delta: number) => {
    const camera = await mapRef.current?.getCamera();
    if (!camera) {
      return;
    }

    const nextZoom = Math.min(20, Math.max(2, (camera.zoom ?? 14) + delta));
    mapRef.current?.animateCamera({...camera, zoom: nextZoom}, {duration: 200});
  };

  return (
    <View className="flex-1 bg-background">
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={DEFAULT_MAP_REGION}
        zoomEnabled
        zoomTapEnabled
        rotateEnabled
        pitchEnabled
        scrollEnabled
        showsUserLocation
        showsMyLocationButton
        showsCompass
      />

      <View
        className="absolute right-4 overflow-hidden rounded-2xl bg-surface/90"
        style={{bottom: insets.bottom + 108}}>
        <Pressable
          accessibilityLabel="확대"
          accessibilityRole="button"
          className="h-11 w-11 items-center justify-center border-b border-border"
          onPress={() => {
            zoomBy(ZOOM_STEP);
          }}>
          <Text className="text-2xl font-medium leading-none text-text-primary">
            +
          </Text>
        </Pressable>
        <Pressable
          accessibilityLabel="축소"
          accessibilityRole="button"
          className="h-11 w-11 items-center justify-center"
          onPress={() => {
            zoomBy(-ZOOM_STEP);
          }}>
          <Text className="text-2xl font-medium leading-none text-text-primary">
            −
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
