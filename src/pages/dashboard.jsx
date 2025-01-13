import React from 'react';
import "../assets/styles.css";
import Login from './login';

const Dashboard = () => {
  return (
    <div className="container-dashboard">
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://mycityhospital.pk/wp-content/uploads/2024/01/shutterstock_1561815367.jpg" class="image-carousel" alt="image1"/>
                </div>
                <div class="carousel-item">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6YvCKSL9rhn4bCmJiBFle4/3775b8153562217a30436a67bdb47c6c/GettyImages-1211642642.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000" class="image-carousel" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://i0.wp.com/totalhealthcare.org/wp-content/uploads/2019/03/About_TotalHealthCare.jpg?fit=864%2C576&ssl=1" class="image-carousel" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <Login/>
    </div>
  );
};

export default Dashboard;
