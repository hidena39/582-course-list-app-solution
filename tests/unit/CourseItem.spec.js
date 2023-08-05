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

  it("shows the add course button", () => {
    const wrapper = shallowMount(CourseItem);
    const buttonText = "Add Course";
    expect(wrapper.find("[data-test-id='6']").text()).toBe(buttonText);
  });
  it("emits an add course event", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.find("[data-test-id='6']").trigger("click");
    console.log(wrapper.emitted().addCourse);
    expect(wrapper.emitted().addCourse[0][0]).toBe(2);
  });

  it("shows a remove course event", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    const buttonText = "Remove Course";
    expect(wrapper.find("[data-test-id='7']").text()).toBe(buttonText);
  });
  it("emits a remove course event", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    await wrapper.find("[data-test-id='7']").trigger("click");
    console.log(wrapper.emitted().removeCourse);
    expect(wrapper.emitted().removeCourse[0][0]).toBe(2);
  });

  // it("displays the add button if available and it was not selected", () => {});

  // it("hides the add button if not available or selected", () => {
  //  await wrapper.setData({ enrollment: 21 });
  //});
  // it("", () => {});
});
