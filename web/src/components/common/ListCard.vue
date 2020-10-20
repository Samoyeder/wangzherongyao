<template>
  <div>
    <card class="home-new" :title="title" :icon="icon">
      <div slot="body">
        <home-new></home-new>
      </div>
    </card>
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "ListCard",
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>