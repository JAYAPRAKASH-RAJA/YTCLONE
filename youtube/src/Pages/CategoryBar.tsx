

const categories = [
  "Javascript", "Bootstrap", "Tailwindcss", "Sass", "Sports", "Reactjs", "ReactNative", "Flutter",
  "Youtube", "Furious", "Fun", "Comedy", "Movie", "Vuejs", "newsong", "Html", "CSS", "Songs",
  "Gaming", "Projects", "Nodejs", "MongoDB",
];

const CategoryBar = () => {
  return (
    <>
    <div className="hidden lg:flex xl:flex ml-64 w-full overflow-x-auto mt-3 p-1 gap-2  ">
      {categories.map((category, index) => (
        <button
          key={index}
          className="bg-neutral-700 text-white px-4 py-2 rounded-full "
        >
          {category}
        </button>
      ))}
    </div>
    </>
  );
};

export default CategoryBar;
