import { shallowMount } from "@vue/test-utils";
import CourseList from "@/components/CourseList.vue";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseList.vue", () => {
  it("emits addCourse event when Add Course button is clicked in CourseItem.vue", async () => {
    const courses = [
      {
        id: 8,
      },
    ];
    const wrapper = shallowMount(CourseList, {
      props: { courses },
    });
    await wrapper.findComponent(CourseItem).vm.$emit("addCourse", 8);
    expect(wrapper.emitted().addCourse[0][0]).toBe(8);
  });
});
