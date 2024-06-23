<template>
  <div class="card">
    <b>{{ props.movie.name }}</b>
    <br />
    Rating: {{ props.movie.rating }}/10
    <br />
    Genre: {{ props.movie.genre }}
    <br />
    Director: {{ props.movie.director }}
    <br />
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
  margin: 8px;
  background-color: AntiqueWhite;
  text-align: left;
}
</style>
