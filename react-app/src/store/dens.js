const GET_DENS = "GET_DENS";

const loadDens = (dens) => {
  return {
    type: GET_DENS,
    dens,
  };
};

export const getAllDens = () => async (dispatch) => {
  const response = await fetch(`/api/dens`);
  if (response.ok) {
    const data = await response.json();
    dispatch(loadDens(data));
    return data;
  }
};

export const getSingleBooking = async (id) => {
  const response = await fetch(`/api/dens/${id}`, {
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const initialState = { listOfDens: [] };

const denReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DENS:
      const allDens = [];
      action.dens.dens.forEach((den) => {
        allDens.push(den);
      });
      return {
        listOfDens: allDens,
      };
    default:
      return state;
  }
};

export default denReducer;