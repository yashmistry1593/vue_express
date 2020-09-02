<template>
  <div class="home">
    <h1>this is profile page</h1>
    <div>params :  {{$route.params.id}}</div>
    <div>query : {{$route.query}}</div>
     <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'Profile'
  
}
</script>
