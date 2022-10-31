import React from 'react';
import { FaHome, FaDatabase, FaInfo, FaDelicious, FaDyalog } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Tabs() {
  let navigate = useNavigate();
  return (
    <div className='tab-block'>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <Link to="/Page_2">
            <button className="nav-link active" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><FaHome /></button>
          </Link>
        </li>

        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FaDatabase /></button>
        </li> 
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-info-tab" data-toggle="pill" data-target="#pills-info" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><FaDelicious /></button>
        </li> 
        <li className="nav-item" role="presentation">
          <Link to="/Page_8">
            <button className="nav-link" id="pills-menu-tab" data-toggle="pill" data-target="#pills-menu" type="button" role="tab" aria-controls="pills-menu" aria-selected="false"><FaInfo /></button>
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-logout-tab" data-toggle="pill" data-target="#pills-logout" type="button" role="tab" aria-controls="pills-menu" aria-selected="false" onClick={() => navigate(-1)}><ImExit /></button>
        </li>
      </ul>
      {/* <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">A</div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...B</div>
        <div className="tab-pane fade" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab">...C</div>
        <div className="tab-pane fade" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">...D</div>
        <div className="tab-pane fade" id="pills-logout" role="tabpanel" aria-labelledby="pills-logout-tab">...E</div>
      </div> */}
    </div>
  )
}

export default Tabs;