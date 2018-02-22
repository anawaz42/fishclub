import {
  createFish,
  simulate,
  createPlants,
  createRocks,
} from './helpers/index';

const initialState = {
  fish: {},
};

const clubReducer = (state=initialState, action, appState) => {
  const { type } = action;

  switch(type) {
    case 'SET_WIDTH_HEIGHT':
      const { rocks,  rockPairs }  = createRocks(250, [], appState.rows, appState.cols);
      const { plants, plantPairs } = createPlants(50, rockPairs, appState.rows, appState.cols);
      const { fish }               = createFish(40, rockPairs.concat(plantPairs), appState.rows, appState.cols);

      return {
        ...state,
        fish,
        plants,
        rocks,
        rockPairs,
        plantPairs,
      };

    case 'TICK':
      return {
        ...state,
        fish: simulate(state.fish, state.plants, state.rocks, appState.rows, appState.cols),
      };

    default:
      return state;
  }
};

export default clubReducer;
