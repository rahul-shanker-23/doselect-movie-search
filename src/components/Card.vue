<template>
  <div class="card">
    <b>{{ props.movie.name }}</b>
    <p>Rating: {{ props.movie.rating }}/10</p>
    <p>Genre: {{ props.movie.genre }}</p>
    <p>Director: {{ props.movie.director }}</p>
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
</style>
