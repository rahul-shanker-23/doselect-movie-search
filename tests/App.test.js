import { flushPromises, mount } from "@vue/test-utils";
import Movie from "../src/components/Movie.vue";
import axios from "axios";
import data from "../db.json";
jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: data.dummyData });
});

describe("App", () => {
  it("should show movie on input value", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("Inception");
    expect(wrapper.findAll(".wrapper .card").length).toBe(1);
    expect(wrapper.find(".wrapper .card > b").text()).toBe("Inception");
  });

  it("should show movie on substring input value ", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("father");
    expect(wrapper.findAll(".wrapper .card").length).toBe(1);
    expect(wrapper.find(".wrapper .card > b").text()).toBe("The Godfather");
  });

  it("should show movie on Upper and Lower Case input value", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("dark knight");
    expect(wrapper.findAll(".wrapper .card").length).toBe(1);
    expect(wrapper.find(".wrapper .card > b").text()).toBe("The Dark Knight");
    await input.setValue("DARK KNI");
    expect(wrapper.findAll(".wrapper .card").length).toBe(1);
    expect(wrapper.find(".wrapper .card > b").text()).toBe("The Dark Knight");
  });

  it("should show all movie on substring input value", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("the");
    expect(wrapper.findAll(".wrapper .card").length).toBe(9);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("The Godfather");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("The Dark Knight");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("The Shawshank Redemption");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("The Matrix");
    expect(wrapper.findAll(".wrapper .card > b").at(4).text()).toBe("The Silence of the Lambs");
    expect(wrapper.findAll(".wrapper .card > b").at(5).text()).toBe("The Departed");
    expect(wrapper.findAll(".wrapper .card > b").at(6).text()).toBe("The Lion King");
    expect(wrapper.findAll(".wrapper .card > b").at(7).text()).toBe("The Green Mile");
    expect(wrapper.findAll(".wrapper .card > b").at(8).text()).toBe("The Lord of the Rings");
  });

  it("should show No Movies Found", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("hello");
    expect(wrapper.find(".wrapper").text()).toBe("No Movies Found");
    await input.setValue("");
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
  });

  it("should sort movies by ratings", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    //console.log(wrapper.html());
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("Forrest Gump");
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setChecked(true);
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("The Shawshank Redemption");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("Pulp Fiction");
    await checkbox.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("Forrest Gump");
  });

  it("should sort movies by ratings along with input value", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const checkbox = wrapper.find('input[type="checkbox"]');
    const input = wrapper.find("input");
    await input.setValue("p");
    expect(wrapper.findAll(".wrapper .card").length).toBe(6);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("Forrest Gump");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("Pulp Fiction");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("The Shawshank Redemption");
    expect(wrapper.findAll(".wrapper .card > b").at(4).text()).toBe("The Departed");
    expect(wrapper.findAll(".wrapper .card > b").at(5).text()).toBe("Saving Private Ryan");
    await checkbox.setChecked(true);
    expect(wrapper.findAll(".wrapper .card").length).toBe(6);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("The Shawshank Redemption");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("Pulp Fiction");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("Forrest Gump");
    expect(wrapper.findAll(".wrapper .card > b").at(4).text()).toBe("Saving Private Ryan");
    expect(wrapper.findAll(".wrapper .card > b").at(5).text()).toBe("The Departed");
    await checkbox.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(6);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("Forrest Gump");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("Pulp Fiction");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("The Shawshank Redemption");
    expect(wrapper.findAll(".wrapper .card > b").at(4).text()).toBe("The Departed");
    expect(wrapper.findAll(".wrapper .card > b").at(5).text()).toBe("Saving Private Ryan");
  });

  it("should show movies by genre", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    const checkbox = wrapper.find('input[type="checkbox"][value="Sci-Fi"]');
    await checkbox.setChecked(true);
    expect(wrapper.findAll(".wrapper .card").length).toBe(3);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("The Matrix");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("Interstellar");
    await checkbox.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
  });

  it("should show movies by multiple genre", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
    const checkbox1 = wrapper.find('input[type="checkbox"][value="Biography"]');
    const checkbox2 = wrapper.find('input[type="checkbox"][value="Animation"]');
    const checkbox3 = wrapper.find('input[type="checkbox"][value="Adventure"]');
    const checkbox4 = wrapper.find('input[type="checkbox"][value="Romance"]');
    await checkbox1.setChecked(true);
    await checkbox2.setChecked(true);
    await checkbox3.setChecked(true);
    await checkbox4.setChecked(true);
    expect(wrapper.findAll(".wrapper .card").length).toBe(4);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Schindler's List");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("The Lion King");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("The Lord of the Rings");
    expect(wrapper.findAll(".wrapper .card > b").at(3).text()).toBe("Titanic");
    await checkbox1.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(3);
    await checkbox2.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(2);
    await checkbox3.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(1);
    await checkbox4.setChecked(false);
    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
  });

  it("should show movies by applying genre, sorting and input value", async () => {
    const wrapper = mount(Movie);
    await flushPromises();
    const input = wrapper.find("input");
    await input.setValue("p");
    const checkbox = wrapper.find('input[type="checkbox"]');
    const checkbox1 = wrapper.find('input[type="checkbox"][value="Sci-Fi"]');
    const checkbox2 = wrapper.find('input[type="checkbox"][value="Crime"]');
    await checkbox.setChecked(true);
    await checkbox1.setChecked(true);
    await checkbox2.setChecked(true);

    expect(wrapper.findAll(".wrapper .card").length).toBe(3);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Pulp Fiction");
    expect(wrapper.findAll(".wrapper .card > b").at(1).text()).toBe("Inception");
    expect(wrapper.findAll(".wrapper .card > b").at(2).text()).toBe("The Departed");

    await input.setValue("");
    await checkbox.setChecked(false);
    await checkbox1.setChecked(false);
    await checkbox2.setChecked(false);

    expect(wrapper.findAll(".wrapper .card").length).toBe(20);
    expect(wrapper.findAll(".wrapper .card > b").at(0).text()).toBe("Inception");
  });
});
