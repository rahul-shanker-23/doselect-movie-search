<template>
  <div>
    <input type="text" v-model="inputText" @input="handleChange" placeholder="type here ..." />
    <div class="row">
      <label for="">Sort By:</label>
      <input type="checkbox" v-model="sortOption" @change="handleChange" />
      Rating
    </div>
    <div class="row">
      <label for="">Choose Genre:</label>
      <div v-for="item in genre" :key="item" style="display: inline-block">
        <input type="checkbox" :value="item" v-model="selectedOptions" @change="handleChange" />
        {{ item }}
      </div>
    </div>

    <div class="wrapper">
      <Card v-for="movie in filteredMovies" :movie="movie" :key="movie.id" />
      <div v-if="!filteredMovies.length">No Movies Found</div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { APIURL } from "../API_URL";
import Card from "./Card.vue";
import { ref, onMounted } from "vue";
const movies = ref([]);
const filteredMovies = ref([]);
const inputText = ref("");
const selectedOptions = ref([]);
const sortOption = ref();
const genre = ref([]);

onMounted(async () => {
  const res = await axios.get(`${APIURL}dummyData`);
  movies.value = res.data;
  filteredMovies.value = res.data;
  genre.value = [...new Set(res.data.map((movie) => movie.genre))];
});

function handleChange() {
  filteredMovies.value = movies.value.filter((movie) =>
    movie.name.toLowerCase().includes(inputText.value.toLowerCase())
  );

  if (selectedOptions.value.length > 0)
    filteredMovies.value = filteredMovies.value.filter((movie) => {
      return selectedOptions.value.includes(movie.genre);
    });

  if (sortOption.value)
    filteredMovies.value.sort((a, b) => {
      if (a.rating > b.rating) return -1;
      return 1;
    });
}
</script>

<style>
.row {
  text-align: left;
  margin-left: 100px;
  margin-top: 10px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-left: 100px;
}
label {
  display: inline-block;
  width: 120px;
}
input[type="text"] {
  width: 400px;
}

@media screen and (max-width: 600px) {
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    margin-left: 10px;
  }
  .row {
    text-align: left;
    margin-left: 10px;
    margin-top: 10px;
  }
  label {
    display: inline-block;
    width: auto;
  }
  input[type="text"] {
    width: 300px;
  }
}
</style>
