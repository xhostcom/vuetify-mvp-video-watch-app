<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">
    <router-link class="title" to="/">Videos</router-link>
    </v-toolbar-title>
    <router-link to="/about">About</router-link>
    <v-spacer></v-spacer>
    <v-btn to="/" icon>
    <v-icon>refresh</v-icon>
    </v-btn>
 <router-view></router-view>
</v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>