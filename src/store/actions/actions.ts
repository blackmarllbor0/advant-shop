import * as ActionCityCreater from "./City";
import * as ActionBasketCreater from "./basket";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...ActionCityCreater,
  ...ActionBasketCreater
};
