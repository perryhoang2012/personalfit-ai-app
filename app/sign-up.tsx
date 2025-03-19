import { IMAGES } from "@/assets/images";
import Input from "@/components/input";
import { t } from "@/locales";
import {
  emailRules,
  fullNameRules,
  passwordRules,
} from "@/utils/validationRules";
import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

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

  const goToSignIn = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-black px-5 justify-center">
      <ScrollView className="flex-1">
        <View className="mt-[150]">
          <Text className="text-[20px] font-semibold leading-[28px] text-neutral">
            {t("CREATE_ACCOUNT")}
          </Text>
          <Text className="text-[14px] color-textSecondary leading-[22px] mt-6">
            {t("CREATE_ACCOUNT_DESC")}
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
              {t("OR_SIGN_UP_WITH")}
            </Text>
          </View>
          <View className="flex-1 h-[1px] bg-[#444]" />
        </View>
        <View className="flex-1">
          <Controller
            control={control}
            name="fullName"
            rules={fullNameRules}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder={t("FULL_NAME")}
                value={value}
                onChangeValue={onChange}
                styleContainer={styles.containerInput}
                error={errors.fullName?.message as string}
                isSubmitted={isSubmitted}
                onBlur={onBlur}
              />
            )}
          />
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

          <View className="mt-[90] items-center">
            <TouchableOpacity
              className="rounded-[30px] w-full items-center justify-center h-[46px] bg-neutral"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="font-medium text-[14px] color-gray900 leading-[22px]">
                {t("CREATE_AN_ACCOUNT")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="items-center justify-center mt-[28px] w-full h-[46px]"
              onPress={() => {
                goToSignIn();
              }}
            >
              <Text className="font-medium text-[14px] color-neutral leading-[22px]">
                {t("HAVE_ACCOUNT")}{" "}
                <Text className="font-medium color-neutral text-[14px]">
                  {t("SIGN_IN")}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    marginBottom: 8,
  },
});
