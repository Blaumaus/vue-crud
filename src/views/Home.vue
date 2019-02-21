<template>
  <div class="home">
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="name">Name</label>
        <input v-model="name" id="name" type="text">
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input v-model="email" id="email" type="email">
      </div>

      <div class="form-control">
        <label for="address">Address</label>
        <input v-model="address" id="address" type="text">
      </div>

      <div class="form-control">
        <label>
          Gender <br>
          <span>Male <input v-model="gender" id="male" type="radio" value="male"></span> <br>
          <span>Female <input v-model="gender" id="female" type="radio" value="female"></span>
        </label>
      </div>
      <input type="submit" class="send" value="Send">
    </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: () => {
    return {
      name: '',
      email: '',
      address: '',
      gender: ''
    }
  },
  methods: {
    sendData() {
      console.log(this.name, this.email, this.address, this.gender)
    }
  }
}
</script>

<style>
  .form-control {
    padding: 5px;
  }

  .form-control label {
    display: block;
  }

  .send {
    margin: 5px;
  }
</style>
