import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";

function DetailsRecettes (props) {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectRecette}> 
          <View>
            <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
              <ImageBackground
                source={{ uri: props.image }}
                style={styles.bgImage}
              >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
              </View>
            </ImageBackground>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mealItem: {
      height: 200,
      width: "100%",
      backgroundColor: "#f5f5f5",
      borderRadius: 10,
      overflow: "hidden",
      marginVertical: 10,
    },
    mealRow: {
      flexDirection: "row",
    },
    mealHeader: {
      height: "85%",
    },
    mealDetail: {
      paddingHorizontal: 10,
      justifyContent: "space-between",
      alignItems: "center",
      height: "15%",
    },
    bgImage: {
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    },
    title: {
      fontSize: 18,
      textAlign: "center",
      color: "white",
    },
    titleContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      paddingVertical: 5,
      paddingHorizontal: 12,
    },
  });

export default DetailsRecettes;