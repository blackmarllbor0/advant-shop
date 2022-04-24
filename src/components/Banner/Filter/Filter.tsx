import "./Filter.scss";

const Filter = () => (
  <div className="row">
    <div className="btn btn-dark row">
      <span>Каталог товаров</span>
      <i className="fa-solid fa-angle-down mb-10" />
    </div>
    <div>
      <div className="row">
        <input type="search" placeholder="Поиск" className="input" />
        <button className="btn btn-blue row">Найти</button>
      </div>
    </div>
  </div>
);

export default Filter;