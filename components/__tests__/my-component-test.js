import { createLocalVue, shallowMount } from "@vue/test-utils";
import MyComponent from "@/components/Bedayz1.vue";

describe("MyComponent", () => {
  it(" When foo is set to -diddly- then set bar to true ", () => {
    const counter = 2;
    const localVue = createLocalVue();
    const wrapper = shallowMount(MyComponent.vue, {
      
      propsData: {
        counter
      }
    });
    
    // run the method in the component here
    wrapper.vm.deneme();

    expect(counter).toBe(2);
  });
});
