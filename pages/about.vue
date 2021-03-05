<template>
  <div class="container">
    <div>
      <h1 class="title">
        non so proprio So bbell'guagliò
      </h1>
      <p>{{ document.data.my_text_field[0].text }}</p>
      <img src="~/assets/IMG_20210208_085727.jpg" alt="">
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("my_nuxt_page", "test_uid");

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style>
img {
  height: 50vh;
  margin-top: 30px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
