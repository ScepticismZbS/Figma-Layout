import React from "react";
import "../styles/App.css"

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-items">
          <div >
            <h5 style={{ fontSize: '2.5rem' }}>
              Самые умные проекты
            </h5>
            <h6 style={{ fontSize: '1.2rem' }}>
              РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ
            </h6>
          </div>
          <div style={{alignSelf: 'center'}}>
            <button type="submit">ВАШ ЗАПРОС</button>
          </div>
        </div>
      </div>
    );
};

export default Footer