<template>
  <div class="thanks">
    <md-card id="card-thanks">
      <md-card-media>
        <img src="../assets/thanks_pic.jpg" alt="Vue-Logo" class="logo-redirect">
      </md-card-media>
      <md-card-content>
        <p class="thanks-content">
          Your data has been successfully entered into database!
        </p>
      </md-card-content>
      <md-card-actoins>
        <router-link to="/">
          <md-button class="md-raised md-primary">Home</md-button>
        </router-link>
      </md-card-actoins>
    </md-card>
  </div>
</template>

<style>
  .thanks {
    width: 35%;
    min-width: 200px;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: -50%;
    transform: translate(-50%);
    animation-name: thanks;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes thanks {
    from {
      opacity: 0;
      top: -50%;
    }

    to {
      opacity: 1;
      top: 16%;
    }
  }

  .thanks-content {
    font-size: 16px;
    text-align: center;
  }

  #card-thanks {
    background: rgba(255, 255, 255, 0.6)
  }
</style>
