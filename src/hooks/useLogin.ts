import { useLoginMutation } from "@/src/services/api/endpoints/authEndpoints";
import { saveToken, saveUser } from "@/src/store/expo-secure-store";
import { validateLogInInput } from "@/src/utils/validation";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async () => {
    if (!validateLogInInput(email, password)) return;
    try {
      const res = await login({ email, password }).unwrap();
      // Store token and user data
      await saveToken(res.token);
      await saveUser({ id: res.id, fullName: res.fullName, email: res.email });
      router.replace("/(app)/(home)");
    } catch (err) {
      Alert.alert("Error", "Invalid email or password");
      setEmail("");
      setPassword("");
      console.log("LOGIN ERROR:", err);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
    resetForm,
  };
};
