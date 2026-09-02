const date = (data: string): string => {
    const date = new Date(data);

    return new Intl.DateTimeFormat("en-us", {
        dateStyle: "medium",
       
        timeZone: "UTC",
    }).format(date);
}

export default date;