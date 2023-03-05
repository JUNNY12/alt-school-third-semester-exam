<template>
    <nav>
      <img class="img" src="../assets/alt-school.svg" alt="logo" />
      <ul>
        <li><router-link active-class="active" to="/">Home</router-link></li>
        <li><router-link active-class="active" to="/counter">Counter</router-link></li>
      </ul>
    </nav>
  </template>

  <script>
    export default {
      name: 'HeaderNav'
    }

</script>
  