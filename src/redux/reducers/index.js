import { combineReducers } from "redux";
import perkalian from "./perkalianReducer";
import tambahan from "./tambahanReducers";
import HitungKata from "./hitungkataReducer";
const reducers = combineReducers({
  multiply: perkalian,
  tambahan,
  HitungKata,
});

export default reducers;
