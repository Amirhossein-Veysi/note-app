const setLocalStorage = (notes) => {
  localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_NAME, JSON.stringify(notes));
};

export default setLocalStorage;
