const app = Vue.createApp({
  data() {
    return {
      message: "Hello, Welcome back!"
    };
  }
});
app.mount("#app");

const app2 = Vue.createApp({
  data() {
    return {
      hobbies: [
        "https://www.w3schools.com/vue/img_burrito.svg",
        "https://www.w3schools.com/vue/img_salad.svg",
        "https://www.w3schools.com/vue/img_cake.svg",
        "https://www.w3schools.com/vue/img_soup.svg",
        "https://www.w3schools.com/vue/img_fish.svg",
        "https://www.w3schools.com/vue/img_pizza.svg",
        "https://www.w3schools.com/vue/img_rice.svg"
      ]
    };
  }
});
app2.mount("#app2");
