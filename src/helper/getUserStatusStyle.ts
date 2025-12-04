import { Colors } from "../constants/colors";


export const getUserStatusStyle = (status: string) => {
    switch (status) {
        case "Participant":
            return { backgroundColor: Colors.gray100 ,color:Colors.gray400 ,fontFamily:"SenBold", borderColor:Colors.gray400 , };
        case "Host":
            return { backgroundColor: "#d7e6ffff" ,color:'#6aa3ffff' ,fontFamily:"SenBold", borderColor:'#6aa3ffff'  }; 
        default:
            return { backgroundColor: "#EEE" };
    }
};