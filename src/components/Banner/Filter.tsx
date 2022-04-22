import React from 'react'

const Filter = () => {
    return (
        <>
            <div className="filter">
            <div className="row">
              <div className="button">
                <span style={{color: '#fff'}}>Каталог товаров</span>
                <i className="fa-solid fa-angle-down mb-10" />
              </div>
              <div className="search">
                <form>
                  <input type="search" placeholder="Поиск" />
                  <button>Найти</button>
                </form>
              </div>
            </div>
          </div>
        </>
    )
}

export default Filter