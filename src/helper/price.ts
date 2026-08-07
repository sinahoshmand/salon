export const formatRial = (price: number | string): string => {
    const value = Number(price);
  
    if (isNaN(value)) return "0 ریال";
  
    return `${value.toLocaleString("fa-IR")} ریال`;
  };
  
  export const formatDollar = (price: number | string): string => {
    const value = Number(price);
  
    if (isNaN(value)) return "$0";
  
    return `$${value.toLocaleString("en-US")}`;
  };