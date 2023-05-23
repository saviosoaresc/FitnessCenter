import React from "react";
import { View, Text, TouchableOpacity, Share, Image } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje eh: " + props.resultImc,
    });
  };
  
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharedbutton}>
        <Text style={styles.imformation}>{props.messageResultImc}</Text>
        <Text name={"number"} style={styles.numberImc}>{props.resultImc}</Text>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Image
            style={styles.sharedImg}
            source={require("./assets/share48px.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
