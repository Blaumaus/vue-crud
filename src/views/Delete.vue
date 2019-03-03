<template>
  <div class="home">
    <md-card id="card-home">
      <form @submit.prevent="deleteId" id="main-form">
        <md-input-container class="form-fontrol">
          <label>Enter user's ID which you want to delete</label>
          <md-input v-model="id" id="id" type="text" />
        </md-input-container>

        <div class="send-wrapper">
          <md-button type="summit" class="md-raised md-primary" id="delete">Delete</md-button>
        </div>
      </form>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'delete',
  data: () => {
    return {
      id: ''
    }
  },
  methods: {
    async deleteId() {
      await axios.delete(`http://localhost:3000/api/records/${this.id}`)
        .then(res => {
          console.log(res.data.state)
          if (res.data.state === 'deleted') alert(`User with id ${this.id} was successfully deleted from database!`)
          else alert(`User with id ${this.id} doesn't exist in database!`)
        })
        .catch(err => {
          alert('Something went wrong...')
        })
    }
  }
}
</script>

<style>
  .form-control:nth-child(4) {
    padding-left: 0;
  }

  .form-control:nth-child(4) > label {
    font-size: 17px;
    color: rdga(0, 0, 0, 0.6);
  }

  .send-wrapper  {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #delete {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  #main-form {
    padding: 5px;
  }

  .home {
    width: 30%;
    min-width: 250px;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: -100%;
    transform: translate(-50%);
    animation-name: home;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes home {
    from {
      opacity: 0;
      top: -100%;
    }

    to {
      opacity: 1;
      top: 16%;
    }
  }

  #card-home {
    background-color: rgba(255, 255, 255, 0.6)
  }
</style>
