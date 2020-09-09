<template>
    <nav class="menu-bar">
      <div class="left-bar">
        <ul class="social-media-nav">
          <li>
            <a class="icon-link" href="#">
              <i class="fab fa-youtube-square menu-buttons"></i>
            </a>
          </li>
          <li>
            <a class="icon-link" href="#">
              <i class="fab fa-instagram-square menu-buttons"></i>
            </a>
          </li>
          <li>
            <a class="icon-link" href="#">
              <i class="fab fa-facebook-square menu-buttons"></i>
            </a>
          </li>
        </ul>
        <ul class="mobile-redirection">
          <li>
            <a class="icon-link" href="#">
              <i class="fab fa-apple menu-buttons"></i>
            </a>
          </li>
          <li>
            <a class="icon-link" href="#">
              <i class="fab fa-google-play menu-buttons"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="logo">
        <img src="../img/logo/RetroJack.png" alt="LOGO">
      </div>
      <div class="user-option">
        <a class="standard-button register-button" href="#">
          Register
        </a>
        <a class="standard-button log-in-button" href="#">
          Log in
        </a>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'MenuBar'
  }
</script>

<style>
  .icon-link {
    color: #00aeef;
    transition: all .4s ease-in-out;
  }

  .icon-link:hover {
    color: #ebb51e;
  }

  .menu-bar {
    display: grid;
    grid-template-columns: 25vw auto 25vw;

    width: 80vw;
    height: 12vh;
  }

  .left-bar {
    display: flex;
    flex-direction: row;
  }

  .menu-buttons {
    font-size: 1.5em;
    padding: 0 5px;
  }

  .social-media-nav,
  .mobile-redirection {
    display: flex;
    flex-direction: row;
  }

  .logo {
    height: 150px;
    width: auto;

    text-align: center;
  }

  .logo img {
    height: 150px;
    width: auto;
  }

  .user-option {
    display: grid;
    grid-template-columns: auto auto;
  }

  .left-bar,
  .logo,
  .user-option{
    height: 100%;
    align-items: center;
  }

  .log-in-button,
  .register-button {
    transition: all .4s ease-in-out;
  }

  .register-button {
    color: #FFFFFF;
    background: linear-gradient(90deg,#00aeef,#00338d,#00338d,#00aeef);
    background-size: 300% 100%;
  }

  .log-in-button {
    color: #00aeef;
    border: 1px solid #00aeef;
  }

  .register-button:hover,
  .log-in-button:hover {
    box-shadow: 0 8px 14px rgba(1,115,192,.25), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)
  }

  @media screen and (max-width: 1200px) {
    .user-option {
      margin: 20px 0;
      height: 70%;
      grid-template-columns: 1fr;
    }
  }
</style>
