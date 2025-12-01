import { Colors } from "../constants/colors";


export const getPaymentStatusStyle = (status: string) => {
    switch (status) {
        case "Completed":
            return { backgroundColor: Colors.green100 ,color:Colors.success ,fontFamily:"SenBold", borderColor:Colors.success , };
        case "Pending":
            return { backgroundColor: Colors.yellow100 ,color:Colors.mustard ,fontFamily:"SenBold", borderColor:Colors.mustard  }; 
        default:
            return { backgroundColor: "#EEE" };
    }
};