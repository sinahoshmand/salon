const rangeSearchParams = (
    key: string,
    values: [number, number],
  ) => {
    const params = new URLSearchParams(window.location.search);
  
    params.set(key, values.join(","));
  
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };
  
  export default rangeSearchParams;