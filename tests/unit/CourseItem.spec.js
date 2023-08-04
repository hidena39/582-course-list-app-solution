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
    expect(wrapper.find("[data-test-id='2']").text()).toBe("hours: 0");
    expect(wrapper.find("[data-test-id='3']").text()).toBe("location: online");
    expect(wrapper.find("[data-test-id='5']").text()).toBe("id: 0");
  });

  it("emits an add course event", async () => {
    const wrapper = shallowMount(CourseItem);
    const buttonText = "Button";
    wrapper.find("[data-test-id='6']").trigger("click");
    expect(wrapper.find("[data-test-id='6']")).toBe(buttonText);
    // console.log(wrapper.emitted().sendAdd);
  });

  // it("emits a remove course event", () => {});

  // it("displays the add button if available and it was not selected", () => {});

  // it("hides the add button if not available or selected", () => {});
  // it("", () => {});
});
