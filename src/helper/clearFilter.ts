const clearFilters = () => {
    window.history.pushState(
      null,
      "",
      window.location.pathname
    );
  };

export default clearFilters;