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
      <Card v-for="movie in movies" :movie="movie" :key="movie.id" />
      <div v-if="!movies.length">No Movies Found</div>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";
import { ref } from "vue";
const props = defineProps(["movies", "genre"]);
const movies = ref(props.movies);

/* write your code here */
const inputText = ref("");
const selectedOptions = ref([]);
const sortOption = ref();
const copyMovies = ref([]);
copyMovies.value = movies.value;

function handleChange() {
  movies.value = copyMovies.value.filter((movie) => movie.name.toLowerCase().includes(inputText.value.toLowerCase()));

  if (selectedOptions.value.length > 0)
    movies.value = movies.value.filter((movie) => {
      return selectedOptions.value.includes(movie.genre);
    });

  if (sortOption.value)
    movies.value.sort((a, b) => {
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
