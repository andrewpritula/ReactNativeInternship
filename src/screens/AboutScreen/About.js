import React from 'react';
import MapView, { Marker, Polygon } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import withLayout from '../../hoc/withLayout';

const About = function About() {
  return (
    <MapView
      style={styles.container}
      scrollEnabled
      zoomEnabled
      pitchEnabled
      rotateEnabled
      region={{
        latitude: 37.82718,
        longitude: -122.42300,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Marker
        title="I`m here"
        description="Come and get me;)"
        coordinate={{ latitude: 37.82718, longitude: -122.42300 }}
      
      >
        <MaterialCommunityIcons
          color="red"
          name="map-marker-radius"
          size={40}
          style={styles.secondIcon}
        />
      </Marker>
      <Polygon
        coordinates={[
          { latitude: 37.84100, longitude: -122.44000 },
          { latitude: 37.84100, longitude: -122.40500 },
          { latitude: 37.81600, longitude: -122.40500 },
          { latitude: 37.81600, longitude: -122.44000 },
        ]}
        strokeColor="red"
        strokeWidth={3}
      />
    </MapView>
  );
};

export default withLayout(About);
