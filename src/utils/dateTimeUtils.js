// src/utils/dateTimeUtils.js
export const getCurrentDateTime = () => {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().split(' ')[0].substring(0, 5);
    return { currentDate, currentTime };
  };
  