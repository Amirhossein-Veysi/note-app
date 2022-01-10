const loadLocalStorage = () => {
  const notes = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_NAME);
  return notes ? JSON.parse(notes) : [];
};

export default loadLocalStorage;
