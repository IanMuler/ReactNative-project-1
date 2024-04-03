import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton({
  title,
  handleOnPress,
}: {
  title: string;
  handleOnPress: () => void;
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.customBtnBG} onPress={handleOnPress}>
        <Text style={styles.customBtnText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    height: 60,
  },
  customBtnBG: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    height: "100%",
    width: "100%",
  },
  customBtnText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
  },
});
