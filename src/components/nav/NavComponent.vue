<template>
    <div class="w-100 bg-info">
      <nav class="navbar navbar-expand-lg  sticky-top  container">
<router-link to="/" class="text-white">
  <a class="navbar-brand text-white text-white" href="#" style="text-decoration:none;">

    <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Shine 
  </a>
  </router-link>
  <button class="navbar-toggler text-white " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="material-icons">apps</span>

  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style="background">
    <ul class="navbar-nav mr-auto pl-3">
      <li class="nav-item active">
        <router-link to="/">
        <a class="nav-link text-white" href="#">Home </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact">
          <a class="nav-link text-white" href="#">Contact</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/aboutme">
        <a class="nav-link text-white" href="#">Abut Me</a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile">
        <a class="nav-link text-white" href="#">Profile</a>
        </router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 pl-3">
      <input class="form-control mr-sm-2 p-1" style="background:inherit;" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-sm btn-dark my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
</template>
