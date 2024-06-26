import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { PokemonFull } from "../../../api/types";
import { barStyles } from "../../../utils/const";

interface IStats {
  stats: PokemonFull["stats"];
}

export const Stats = ({ stats }: IStats) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{item.stat.name}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View
                style={[styles.bar, barStyles(item.base_stat)] as ViewStyle}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 14,
    color: "#6b6b6b",
    textTransform: "capitalize",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 14,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 10,
    borderRadius: 20,
  },
});
