import { Colors } from "../constants/Colors";
import dayjs from "dayjs";
import React from "react";
import { Calendar, DateData } from "react-native-calendars";

type CalendarProps = {
  date: Date;
  setDate: (date: Date) => void;
};

const CalendarComponent: React.FC<CalendarProps> = ({ date, setDate }) => {
  const calendarTheme = {
    backgroundColor: Colors.white,
    calendarBackground: Colors.white,
    selectedDayBackgroundColor: Colors.gray900,
    selectedDayTextColor: Colors.white,
    todayTextColor: Colors.gray900,
    dayTextColor: Colors.gray900,
    textDisabledColor: Colors.gray400,
    textDayFontFamily: "Inter-Regular",
    textMonthFontFamily: "Inter-Regular",
    textMonthFontSize: 16,
    textDayFontSize: 16,
    arrowColor: Colors.gray900,
  };

  const handleDayPress = (day: DateData) => {
    setDate(dayjs(day.dateString).toDate());
  };

  return (
    <Calendar
      initialDate={date}
      theme={calendarTheme}
      onDayPress={handleDayPress}
    />
  );
};

export default CalendarComponent;
