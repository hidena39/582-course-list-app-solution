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
  it("shows right enrollment status", async () => {
    const course = {
      enrollment: 10,
    };
    const wrapper = shallowMount(CourseItem, {
      props: { course },
    });
    expect(wrapper.find("[data-test-id='4']").text()).toBe(
      "enrollment: 10 available to join"
    );
  });

  //add
  it("shows the add course button if available and it was not selected", () => {
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
  it("hides the add button if already selected", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    expect(wrapper.find("[data-test-id='6']").exists()).toBe(false);
  });

  // it("hides the add button if not available", async () => {
  //   const wrapper = shallowMount(CourseItem);
  //   await wrapper.setData({ isFull: true });
  //   expect(wrapper.find("[data-test-id='6']").exists()).toBe(false);
  // });

  it("hides the add button if not available", async () => {
    const course = {
      enrollment: 20,
    };
    const wrapper = shallowMount(CourseItem, {
      props: { course },
    });
    expect(wrapper.find("[data-test-id='6']").exists()).toBe(false);
  });

  //remove
  it("shows a remove course button if it is already selected", async () => {
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
});
