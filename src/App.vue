<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo-Vue" class="logo-vue">
      </div>
      <div class="to-data">
        <router-link to="/data">
          <md-button class="md-raised md-primary">Go to data</md-button>
        </router-link>
        <router-link to="/delete">
          <md-button class="md-raised md-primary">Delete user from DB</md-button>
        </router-link>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
  #app {
    background: url("assets/black-background.jpg");
    height: 100vh;
  }

  #app > header {
    width: 100%;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: relative;
    margin: 0;
    padding: 5px 0;
    z-index: 100;
  }

  .logo {
    width: 70px;
    margin: 0 auto;
  }

  .to-data {
    position: absolute;
    top: 15px;
    right: 10px;  
  }
</style>
