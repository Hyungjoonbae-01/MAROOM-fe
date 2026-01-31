import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from "@expo-google-fonts/noto-sans";
import {
  Sansation_400Regular,
} from "@expo-google-fonts/sansation";
import { MainLayout } from "../pages/00_main-layout";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    NotoSans_400Regular,
    NotoSans_700Bold,
    Sansation_400Regular,
  });
  if (!fontsLoaded) return null;

  return <MainLayout />;
}
