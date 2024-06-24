<template>
  <div class="card">
    <b>{{ props.movie.name }}</b>
    <div>Rating: {{ props.movie.rating }}/10</div>
    <div>Genre: {{ props.movie.genre }}</div>
    <div>Director: {{ props.movie.director }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.card {
  padding: 10px;
  height: 200px;
  width: 200px;
  background-color: AntiqueWhite;
  text-align: left;
  margin-right: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  .card {
    padding: 5px;
    height: 150px;
    width: 150px;
    background-color: AntiqueWhite;
    text-align: left;
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
</style>
