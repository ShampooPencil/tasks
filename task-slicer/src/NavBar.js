import React from 'react';
// import ReactDOM from 'react-dom';

export default function NavBar(){ //probably add props later on
    const taskSlicerNavBar = (
        <>
        <div>
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
<nav id="navbar" class="">
  <div class="nav-wrapper">
    Navbar Logo 
    <div class="logo">
        <a href="#home"><i class="fa fa-angellist"></i> Logo</a>
    </div>
<ul id="menu">
      <li><a href="#home">Home</a></li>
   <li><a href="#services">Services</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>


<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
</div>
        </>
    );
    
    return taskSlicerNavBar;
}