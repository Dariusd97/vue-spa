<template>
  <div id="app">
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
    <Navbar />
    <div class="container">
       <router-view/>
    </div>
   
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar 
  }
}
</script>


