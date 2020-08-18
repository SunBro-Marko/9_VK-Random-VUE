<template>
  <div>
    <winner v-bind:winner="user" />
  </div>
</template>

<script>
import winner from "@/components/winner.vue";
export default {
  name: "Home",
  components: {
    winner,
  },
  data() {
    return {
      user: {
        name: "Дядя Федор",
        img_url:
          "https://avatars.mds.yandex.net/get-pdb/1365420/53f87cbb-ceb7-45d8-a7aa-22ba74c12167/s1200?webp=false",
        isonline: true,
        isopened: true,
        isfollower: true,
      },
    };
  },
};
</script>

<style></style>
