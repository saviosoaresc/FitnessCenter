import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop:20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex:1,
    },

    form:{
        width: "100%",

    },

    formLabel:{
        color:'#000',
        paddingLeft: 20,
        fontSize: 18,
    },

    formImput :{
    width:"90%",
    borderRadius:50,
    backgroundColor: "#dcdcdc",
    height: 50,
    margin:12,
    paddingLeft: 10,
    },

    formButton:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor:'#ff0000',
        paddingTop: 14,
        paddingBottom:14,
        marginLeft: 12,
        marginTop: 30,
    },

    textformButton: {
        fontSize: 20,
        color: '#fff',
    },

    errorMessage:{
        fontSize:10,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
        marginLeft: 200,
    },
    exibitionResultimc:{
        width: "100%",
        height: "50%",
    },
    listImcs:{
        marginTop: 20,
    },
    resultImcItem:{
        fontSize: 26,
        color: "red",
        height: 50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:16,
        
    },

});

export default styles