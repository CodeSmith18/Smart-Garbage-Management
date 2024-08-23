import React from 'react';
import "./UserPage.css";

function UserPageD() {
  return (
    <div className="app-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Setting</a></li>
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <CardGrid>
        <Card title="Card 1" image="card-image-1.jpg" description="This is card 1" />
        <Card title="Card 2" image="card-image-2.jpg" description="This is card 2" />
        <Card title="Card 3" image="card-image-3.jpg" description="This is card 3" />
        <Card title="Card 4" image="card-image-4.jpg" description="This is card 4" />
        <Card title="Card 5" image="card-image-5.jpg" description="This is card 5" />
        <Card title="Card 6" image="card-image-6.jpg" description="This is card 6" />
      </CardGrid>
    </div>
  );
}

function CardGrid({ children }) {
  return (
    <div className="card-grid">
      {children}
    </div>
  );
}

function Card({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default UserPageD;