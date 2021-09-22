import { StyleSheet } from 'react-native'
 
export default StyleSheet.create({
    appButtonContainer: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        // backgroundColor:'black'
    },
    sharebtn:{
        // marginLeft:'20px',
    },
    appButton: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
        // alignSelf: "center",
        // width: "100",
        height:"100%",
        backgroundColor: 'blue',
    },
    background: {
      marginTop:40,
    /*  alignItems: 'center', */
        textAlignVertical: 'center'
    },
    text: {
        fontSize: 18,
        padding: 15,
        color:'#0050ff',
        textAlign: 'center',
 
    },
    wallpaper:{
        width:'100%',
        height:400
    }
});