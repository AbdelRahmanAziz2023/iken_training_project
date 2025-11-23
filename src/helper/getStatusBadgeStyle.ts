import { Colors } from "../constants/colors";

const getStatusBadgeStyle = (status: string) => {
  switch (status) {
    case "locked":
      return { backgroundColor: Colors.lightred };
    case "opened":
      return { backgroundColor: Colors.success };
    case "placed":
      return { backgroundColor: Colors.mustard };
    default:
      return { backgroundColor: "#EEE" };
  }
};

export default getStatusBadgeStyle;
