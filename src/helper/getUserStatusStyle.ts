import { Colors } from "../constants/colors";


export const getUserStatusStyle = (status: string) => {
    switch (status) {
        case "Participant":
            return { backgroundColor: Colors.gray100 ,color:Colors.gray400 ,fontFamily:"SenBold", borderColor:Colors.gray400 , };
        case "Host":
            return { backgroundColor: "#c6dcffff" ,color:'#3b82f6' ,fontFamily:"SenBold", borderColor:'#3b82f6'  }; 
        default:
            return { backgroundColor: "#EEE" };
    }
};