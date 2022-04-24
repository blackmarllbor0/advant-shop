import { FC } from "react";

type prop = {
  list: string[];
  close: () => void;
  setCity: (city: string) => void;
};

const DropDownCityList: FC<prop> = ({ list, close, setCity }) => (
  <div
    className="drop-list"
    style={{
      overflowY: list.length < 5 ? "auto" : "scroll",
    }}
  >
    {list.map((item, i) => (
      <span
        key={i}
        onClick={() => {
          close();
          setCity(item);
        }}
      >
        {item}
      </span>
    ))}
  </div>
);

export default DropDownCityList;
