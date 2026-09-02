export const getTimePeriod = (time: string): "AM" | "PM" => {
    const hour = parseInt(time.split(":")[0], 10);
  
    return hour < 12 ? "AM" : "PM";
  };