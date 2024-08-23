import React from 'react';
import "./Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#" className="active">
              <i className="fas fa-home"></i>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"></i>
              Profile
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="search-bar">
            <input type="search" placeholder="Search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="user-profile">
            <img src="user.png" alt="User Profile" />
            <span>Admin</span>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3>Card 1</h3>
            </div>
            <div className="card-body">
              <p>Total Work</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Card 2</h3>
            </div>
            <div className="card-body">
              <p>Completed Work</p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3>Card 3</h3>
            </div>
            <div className="card-body">
              <p>Pending Work</p>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <h3>Chart 1</h3>
            <canvas id="chart-1"></canvas>
          </div>
          <div className="chart">
            <h3>Chart 2</h3>
            <canvas id="chart-2"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;