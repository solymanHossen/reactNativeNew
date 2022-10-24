import React from 'react';
import { View } from 'react-native';

const DiscoverFont = () => {
  return (
    <View>
      <Text style={styles.headerFont}>
          Discover
        </Text>

        <View style={styles.menuFlex}>
          <Text style={styles.menuFont} >All</Text>
          <Text style={styles.menuFont} >Destinations</Text>
          <Text style={styles.menuFont} >Cities</Text>
          <Text style={styles.menuFont} >Experiences</Text>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  headerFont: {
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 38
  },
  menuFont: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19,
    color: "#F35D38"
  },
})

export default DiscoverFont;