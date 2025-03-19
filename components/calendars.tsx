import { colors } from "@/themes/colors";
import dayjs from "dayjs";
import React from "react";
import { Calendar } from "react-native-calendars";

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

const Calendars = (props: Props) => {
  const { date, setDate } = props;

  return (
    <Calendar
      initialDate={date}
      theme={{
        backgroundColor: colors.neutral,
        calendarBackground: colors.neutral,
        selectedDayBackgroundColor: colors.gray900,
        selectedDayTextColor: colors.neutral,
        todayTextColor: colors.gray900,
        dayTextColor: colors.gray900,
        textDisabledColor: colors.textSecondary,
        textDayFontFamily: "Inter-Regular",
        textMonthFontFamily: "Inter-Regular",
        textMonthFontSize: 16,
        textDayFontSize: 16,
        arrowColor: colors.gray900,
      }}
      onDayPress={(day: {
        dateString: string | number | Date | dayjs.Dayjs | null | undefined;
      }) => {
        setDate(dayjs(day.dateString).toDate());
      }}
    />
  );
};

export default Calendars;
