import { getStatusBarHeight } from "@/utils/uiHelper";
import dayjs from "dayjs";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function PersonalizeSetting() {
  const navigation = useNavigation();
  const router = useRouter();

  const [showModalSelectDateOfBirth, setShowModalSelectDateOfBirth] =
    useState<boolean>(false);

  const [showModalSelectHeight, setShowModalSelectHeight] =
    useState<boolean>(false);
  const [showModalSelectWeight, setShowModalSelectWeight] =
    useState<boolean>(false);

  const [state, setState] = useState({
    date_of_birth: dayjs().toDate(),
    gender: "Male",
    height: 180,
    weight: 180,
  });

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View
      className={`flex-1 bg-black px-20 pt-[${getStatusBarHeight + 40}]`}
    ></View>
  );
}
