import { Alert } from "react-native";

export const validateEmail = (email: string): boolean => {
  // Simple regex for basic email validation
  const reEmail = /^.+@.+\..+$/;
  return reEmail.test(email.trim().toLowerCase());
};

export const validatePassword = (password: string): boolean => {
  // Simple regex for basic password validation
  return password.length >= 6 && !/\s/.test(password);
};


export const validateLogInInput = (
  email: string,
  password: string
): boolean => {
  if (!validateEmail(email)) {
    Alert.alert(
      "Invalid Email",
      'Please enter a valid email address that includes "@" and ".".'
    );
    return false;
  }

  if (!validatePassword(password)) {
    Alert.alert(
      "Invalid Password",
      "Password must be at least 8 characters long."
    );
    return false;
  }
  return true;
};

export const validateSignUpInput = (
  firstName: string,
  secondName: string,
  email: string,
  password: string
): boolean => {
  if (firstName.trim().length === 0) {
    Alert.alert("Missing Field", "Please enter your First Name.");
    return false;
  }

  if (secondName.trim().length === 0) {
    Alert.alert("Missing Field", "Please enter your Second Name.");
    return false;
  }
  if (!validateEmail(email)) {
    Alert.alert(
      "Invalid Email",
      'Please enter a valid email address that includes "@" and ".".'
    );
    return false;
  }
  if (!validatePassword(password)) {
    Alert.alert(
      "Invalid Password",
      "Password must be at least 8 characters long."
    );
    return false;
  }
  return true;
};

export const validatePasscode = (passcode: string): boolean => {
  const code = passcode.trim();
  // Must be exactly 6 characters, uppercase letters A-Z and digits 0-9 only
  const re = /^[A-Z0-9]{6}$/;
  if (!re.test(code)) {
    Alert.alert(
      "Invalid Passcode",
      "Passcode must be exactly 6 characters and contain only uppercase letters (A-Z) and numbers."
    );
    return false;
  }
  return true;
};
