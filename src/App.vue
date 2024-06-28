<template>
  <h1>Movie Search</h1>
  <Movie v-if="movies.length" :movies="movies" :genre="genre" />
  {{ error }}
</template>

<script setup>
import { ref, onMounted } from "vue";
import Movie from "./components/Movie.vue";
import axios from "axios";
import { APIURL } from "./API_URL";
const movies = ref([]);
const genre = ref([]);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await axios.get(`${APIURL}dummyData`);
    movies.value = res.data;
    genre.value = [...new Set(res.data.map((movie) => movie.genre))];
  } catch {
    error.value = "API Server is not Running, Please run command: npm run server";
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
