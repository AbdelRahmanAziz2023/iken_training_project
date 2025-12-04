import { Colors } from "../constants/colors";

export const getPaidStatusStyle = (status: string) => {
    switch (status) {
        case "Unpaid":
            return { backgroundColor: Colors.red100 ,color:Colors.red, fontFamily:"SenBold", borderColor:Colors.red  };
        case "Paid":
            return { backgroundColor: Colors.green100 ,color:Colors.success, fontFamily:"SenBold", borderColor:Colors.success  }; 
        default:
            return { backgroundColor: "#EEE" };
    }
};