import { IMAGES } from "@/assets/images";
import Input from "@/components/input";
import { t } from "@/locales";
import { emailRules, passwordRules } from "@/utils/validationRules";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const {
    getValues,
    control,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = () => {};

  return (
    <View className="flex-1 bg-black px-5 justify-center">
      <ScrollView className="flex-1">
        <View className="mt-[150]">
          <Text className="text-[20px] font-semibold leading-[28px] text-neutral">
            {t("WELCOME_BACK")}
          </Text>
          <Text className="text-[14px] color-textSecondary leading-[22px] mt-6">
            {t("SIGN_IN_DESC")}
          </Text>
        </View>
        <View className="justify-between flex-row items-center mt-[40]">
          <TouchableOpacity className="flex-row items-center justify-between w-[49%] py-[13px] px-3 border border-[#444] rounded-xl">
            <Image source={IMAGES.logo_google} className="w-[20px] h-[20px]" />
            <Text className="font-medium text-[14px] color-gray-50">
              {t("SIGN_UP_WITH_GOOGLE")}
            </Text>
            <View className="w-[20px]" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between w-[49%] py-[13px] px-3 border border-[#444] rounded-xl">
            <Image
              source={IMAGES.logo_facebook}
              className="w-[20px] h-[20px]"
            />
            <Text className="font-medium text-[14px] color-gray-50">
              {t("SIGN_UP_WITH_FACEBOOK")}
            </Text>
            <View className="w-[20px]" />
          </TouchableOpacity>
        </View>
        <View className="my-[24] flex-row items-center">
          <View className="flex-1 h-[1px] bg-[#444]" />
          <View className="mx-[10px] items-center">
            <Text className="font-regular color-neutral text-[12px] leading-[18px]">
              {t("OR_SIGN_IN_WITH")}
            </Text>
          </View>
          <View className="flex-1 h-[1px] bg-[#444]" />
        </View>
        <View className="flex-1">
          <Controller
            control={control}
            name="email"
            rules={emailRules}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={t("EMAIL")}
                value={value}
                onChangeValue={onChange}
                styleContainer={styles.containerInput}
                error={errors.email?.message as string}
                isSubmitted={isSubmitted}
                onBlur={onBlur}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={passwordRules}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={t("PASSWORD")}
                value={value}
                onChangeValue={onChange}
                styleContainer={styles.containerInput}
                error={errors.password?.message as string}
                isSubmitted={isSubmitted}
                onBlur={onBlur}
                isInputPassword={true}
              />
            )}
          />
          <View className="mt-[4px] flex-row justify-end">
            <TouchableOpacity>
              <Text className="font-medium text-[14px] color-neutral">
                {t("FORGOT_PASSWORD")}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-[90] items-center">
            <TouchableOpacity
              className="rounded-[30px] w-full items-center justify-center h-[46px] bg-neutral"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="font-medium text-[14px] color-gray900 leading-[22px]">
                {t("LOG_IN")}
              </Text>
            </TouchableOpacity>
            <Link href={"/sign-up"} asChild>
              <TouchableOpacity
                className="items-center justify-center mt-[28px] w-full h-[46px]"
                onPress={() => {}}
              >
                <Text className="font-medium text-[14px] color-neutral leading-[22px]">
                  {t("NO_ACCOUNT_GO_TO_SIGN_UP")}
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 10,
    // backgroundColor: "red",
  },
});
