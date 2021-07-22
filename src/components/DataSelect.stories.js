import React from "react";
import DataSelect from "@avrc/data-select";

const items = [
  {
    text: "Disney Animation",
    value: "disney",
    children: [
      { value: "chicken_little", text: "Chicken Little" },
      { value: "bolt", text: "Bolt" },
      { value: "tangled", text: "Tangled" },
      { value: "wreck_it_ralph", text: "Wreck-It Ralph" },
      { value: "frozen", text: "Frozen" },
      { value: "big_hero_6", text: "Big Hero 6" },
      { value: "zootopia", text: "Zootopia" },
      { value: "moana", text: "Moana" },
      { value: "ralph_breaks_the_internet", text: "Ralph Breaks the Internet" },
    ],
  },
  {
    text: "DreamWorks Animation",
    value: "dreamworks",
    children: [
      { value: "antz", text: "Antz" },
      { value: "the_prince_of_egypt", text: "The Prince of Egypt" },
      { value: "the_road_to_el_dorado", text: "The Road to El Dorado" },
      { value: "chicken_run", text: "Chicken Run" },
      { value: "shrek", text: "Shrek" },
    ],
  },
  {
    text: "Pixar",
    value: "pixar",
    children: [
      { value: "toy_story", text: "Toy Story" },
      { value: "a_bugs_life", text: "A Bug's Life" },
      { value: "toy_story_2", text: "Toy Story 2" },
      { value: "monsters_inc", text: "Monsters Inc." },
      { value: "finding_nemo", text: "Finding Nemo" },
      { value: "the_incredibles", text: "The Incredibles" },
      { value: "cars", text: "Cars" },
      { value: "ratatouille", text: "Ratatouille" },
      { value: "wall_e", text: "WALL-E" },
      { value: "up", text: "Up" },
      { value: "toy_story_3", text: "Toy Story 3" },
      { value: "cars_2", text: "Cars 2" },
      { value: "brave", text: "Brave" },
      { value: "monsters_university", text: "Monsters University" },
      { value: "inside_out", text: "Inside Out" },
      { value: "the_good_dinosaur", text: "The Good Dinosaur" },
      { value: "finding_dory", text: "Finding Dory" },
      { value: "cars_3", text: "Cars 3" },
      { value: "coco", text: "Coco" },
      { value: "incredibles_2", text: "Incredibles 2" },
    ],
  },
  {
    text: "Warner Animation Group",
    value: "wag",
    children: [
      { value: "the_lego_movie", text: "The Lego Movie" },
      { value: "storks", text: "Storks" },
      { value: "the_lego_batman_movie", text: "The Lego Batman Movie" },
      { value: "the_lego_ninjago_movie", text: "The Lego Ninjago Movie" },
      { value: "smallfoot", text: "Smallfoot" },
    ],
  },
];

export default {
  title: "@avrc/DataSelect",
  component: DataSelect,
  argTypes: {
    error: {
      control: "boolean",
      description: "Shows error message",
    },
    expandable: {
      control: "boolean",
      description: "Shows items as expandable",
    },
    loading: {
      control: "boolean",
      description: "Shows items as loading",
    },
    search: {
      control: "boolean",
      description: "Shows a search input",
    },
  },
};

export const Basic = (props) => {
  const itemsRef = React.useRef(
    items.map((item) => ({ ...item, children: [] }))
  );
  const [value, setValue] = React.useState("");

  return (
    <DataSelect
      {...props}
      items={itemsRef.current}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
      style={{ width: "20rem" }}
      value={value}
    />
  );
};

export const BasicSelectAll = (props) => {
  return <Basic {...props} selectAll />;
};

export const BasicSelectAllMultiple = (props) => {
  return <Basic {...props} multiple selectAll />;
};

export const Grouped = (props) => {
  const itemsRef = React.useRef(items);
  const [value, setValue] = React.useState("");

  return (
    <DataSelect
      {...props}
      items={itemsRef.current}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
      style={{ width: "20rem" }}
      value={value}
    />
  );
};

export const GroupedSelectAll = (props) => {
  return <Grouped {...props} selectAll />;
};

export const GroupedSelectAllMultiple = (props) => {
  return <Grouped {...props} multiple selectAll />;
};