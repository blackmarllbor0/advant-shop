import * as ActionCityCreater from "./City";
import * as ActionBasketCreater from "./basket";
import * as ActionProductCreater from "./prodcut";


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...ActionCityCreater,
  ...ActionBasketCreater,
  ...ActionProductCreater
};
