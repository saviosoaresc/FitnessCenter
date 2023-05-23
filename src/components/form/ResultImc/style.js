import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  boxSharedbutton: {
    width: "100%",
    alignItems: "center",
    flex:1,

  },
  viewButton: {
    width: "100%",
    alignItems: "flex-end",
  },

  numberImc: {
    fontSize: 48,
    color: "#ff0000",
    fontWeight: "bold",
  },
  imformation: {
    fontSize: 22,
    color: "#ff0000",
    fontWeight: "bold",
  },

  shared: {
    borderRadius: 10,
    marginStart: "80%",
    marginVertical: -68
  },
  sharedText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  sharedImg: {
    width: 38,
    height: 38,
    marginRight: 14,
    marginLeft: 10,
    marginTop: 14,
    marginBottom: 10,
  },
});

export default styles;
