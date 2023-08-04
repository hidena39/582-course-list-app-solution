import { shallowMount } from "@vue/test-utils";
import CourseItem from "@/components/CourseItem.vue";

describe("CourseItem.vue", () => {
  it("renders the props", () => {
    const course = {
      id: 0,
      name: "Course Name",
      credits: 0,
      hours: 0,
      description: "Lorem ipsum dolor",
      location: "online",
      enrollment: 0,
    };
    const wrapper = shallowMount(CourseItem, {
      props: { course },
    });
    expect(wrapper.find("h2").text()).toBe("Course Name");
    expect(wrapper.find("p").text()).toBe("Lorem ipsum dolor");
    expect(wrapper.find("[data-test-id='1']").text()).toBe("credits : 0");
  });

  // it("emits an add course event", () => {});

  // it("emits a remove course event", () => {});

  // it("displays the add button if available and it was not selected", () => {});

  // it("hides the add button if not available or selected", () => {});
  // it("", () => {});
});