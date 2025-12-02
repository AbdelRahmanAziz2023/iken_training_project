import { useRegisterMutation } from "@/src/services/api/endpoints/authEndpoints";
import { saveToken, saveUser } from "@/src/store/expo-secure-store";
import { validateSignUpInput } from "@/src/utils/validation";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useRegister = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUp, { isLoading }] = useRegisterMutation();

  const handleRegister = async () => {
    if (!validateSignUpInput(firstName, secondName, email, password)) return;
    try {
      const res = await signUp({ firstName, secondName, email, password }).unwrap();
      console.log("REGISTER SUCCESS:", res);
      // Store token and user data
      await saveToken(res.token);
      await saveUser({ id: res.id, fullName: res.fullName, email: res.email });
      router.replace("/(app)/(home)");
    } catch (err: any) {
      Alert.alert("Error", "Something went wrong");
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPassword("");
      console.log("REGISTER ERROR: " + err);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setSecondName("");
    setEmail("");
    setPassword("");
  };

  return {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleRegister,
    resetForm,
  };
};
