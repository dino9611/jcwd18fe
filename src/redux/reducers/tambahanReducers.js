const INITIAL_STATE = {
  angka: 100,
};

const tambahan = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TAMBAH":
      return { ...state, angka: state.angka + 1 };
    case "KURANG":
      return { ...state, angka: state.angka - 1 };
    default:
      return state;
  }
};

export default tambahan;
