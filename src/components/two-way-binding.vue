<template>
  <form action="">
    {{ name }}
    <label for="firstName">firstName</label>
    <input
      id="firstName"
      name="firstName"
      type="text"
      v-model="name"
      placeholder="firstName"
    />
  </form>
</template>

<script>
export default {
  name: "TwoWayBinding",
  data() {
    return {
      name: "",
    };
  },
};
</script>
