<template>
  <div class="course" :class="{ isFull, isAdded }">
    <h2>{{ course.name }}</h2>
    <p>{{ course.description }}</p>
    <ul>
      <li data-test-id="1">credits : {{ course.credits }}</li>
      <li data-test-id="2">hours: {{ course.hours }}</li>
      <li data-test-id="3">location: {{ course.location }}</li>
      <li data-test-id="4">
        enrollment: {{ course.enrollment }}
        <span class="status">{{ enrollmentStatus }}</span>
      </li>
      <li data-test-id="5">id: {{ course.id }}</li>
    </ul>

    <button data-test-id="6" v-if="!isFull && !isAdded" @click="sendAdd">
      Add Course
    </button>
    <button data-test-id="7" v-else-if="!isFull" @click="sendRemove">
      Remove Course
    </button>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    course: {
      type: Object,
      default() {
        return {
          id: 2,
          name: "Course Name",
          credits: 0,
          hours: 0,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium modi adipisci rem architecto sequi atque mollitia voluptates magnam assumenda at reiciendis aliquid, iusto ab debitis quibusdam molestiae quas commodi?",
          location: "online",
          enrollment: 0,
        };
      },
    },
  },
  data() {
    return {
      isAdded: false,
    };
  },
  methods: {
    sendAdd() {
      console.log(1);
      this.$emit("addCourse", this.course.id);
      console.log(3);
      this.isAdded = true;
    },
    sendRemove() {
      this.$emit("removeCourse", this.course.id);
      console.log("remove");
      this.isAdded = false;
    },
  },
  computed: {
    enrollmentStatus() {
      if (this.course.enrollment == 0) {
        return "empty";
      } else if (this.course.enrollment >= 20) {
        return "full";
      } else {
        return "available to join";
      }
    },
    isFull() {
      return this.course.enrollment >= 20;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.course {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em;
  border-radius: 0.5em;
  transition: all 0.3s ease-in-out;
}

.isFull {
  border-color: red;
}

ul {
  display: grid;
}

li {
  list-style: none;
  text-align: left;
}
.status {
  // rounded corner label for status
  display: inline-block;
  padding: 0.2em 0.6em 0.3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;

  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25em;
  background-color: #999;
}
</style>
