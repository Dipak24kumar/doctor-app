import React from 'react';
import { FaHome, FaDatabase, FaInfo, FaDelicious } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Tabs() {
  let navigate = useNavigate();
  const handleHomeTab = (e, url) => {
    document.querySelectorAll(".active_btn").forEach(itm => {
      itm.classList.remove("active");
    })
    e.target.parentNode.classList.add("active");
    setTimeout(() => {
      navigate(url);
    }, 1000);
  }

  return (
    <div className='tab-block'>
      <div className='main-block'>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active_btn" id="pills-home-tab" type="button" onClick={e => handleHomeTab(e, "/tabs/tabsroutes")}><FaHome /></button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active_btn" id="pills-profile-tab" type="button" onClick={e => handleHomeTab(e, "/tabs/tabsroutes/page_10")}><FaDatabase /></button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active_btn" id="pills-info-tab" type="button" onClick={e => handleHomeTab(e, "/Page_11")}><FaDelicious /></button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active_btn" id="pills-menu-tab" type="button" onClick={e => handleHomeTab(e, "/Page_8")}><FaInfo /></button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-logout-tab" type="button" onClick={() => navigate(-1)}><ImExit /></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs;