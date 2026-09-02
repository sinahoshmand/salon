const Jalali = (data: string): string => {
    const date = new Date(data);
  
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "medium",
    }).format(date);
  };
  
  export default Jalali;