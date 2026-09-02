const simpleSearchParams = (key: string, value?: string) => {
    const params = new URLSearchParams(window.location.search);

    if (value?.trim()) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    window.history.pushState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`,
    );
  };

  export default simpleSearchParams;