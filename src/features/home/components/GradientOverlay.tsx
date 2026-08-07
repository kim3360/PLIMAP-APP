import {StyleSheet, View} from 'react-native';

/** expo-linear-gradient 없이 하단 페이드를 흉내 냅니다. */
export default function GradientOverlay() {
  return (
    <View pointerEvents="none" style={styles.wrap}>
      <View style={[styles.layer, styles.l1]} />
      <View style={[styles.layer, styles.l2]} />
      <View style={[styles.layer, styles.l3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'flex-end',
  },
  layer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  l1: {
    height: '70%',
    backgroundColor: 'rgba(12,13,15,0.15)',
  },
  l2: {
    height: '50%',
    backgroundColor: 'rgba(12,13,15,0.45)',
  },
  l3: {
    height: '35%',
    backgroundColor: 'rgba(12,13,15,0.85)',
  },
});
