import { useState } from "react";

const category = [
  "All Categories",
  "Art",
  "Blockchain",
  "Book",
  "Brand",
  "Business Idea",
  "Championship Manager",
  "Cinema",
  "Circular Economy",
  "City",
  "Construction",
  "Country",
  "Daily Life",
  "Economy",
  "Education",
  "Event",
  "Fashion",
  "Food",
  "Gaming",
  "Health",
  "History",
  "Ideology",
  "Internet",
  "Law",
  "Literature",
  "Music",
  "Nature",
  "News",
  "Other",
  "Podcast",
  "Poem",
  "Politics",
  "Poll",
  "Question",
  "Religion",
  "Romance",
  "Science",
  "Sports",
  "TV",
  "Technology",
  "Trading",
  "Travel",
  "my2cents",
];
function RightCategory() {
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const hidePanel = () => {
    setHide(!hide);
    setShow(false);
  };

  const showPanel = () => {
    setShow(true);
  };

  return (
    <div className="border-[1px] border-gray-300 w-[310px]  mt-4 rounded-t-2xl  rounded-b-2xl ">
      <div className="flex h-[80px] bg-[#2D4EE5] rounded-t-2xl justify-between text-white pt-7 pl-5 font-bold text-xl ">
        Category
        <img src="down.png " className="mb-4 mr-3" onClick={hidePanel} />
      </div>
      <div
        className={
          "flex text-[#2D4EE5] text-xs  flex-wrap justify-between mt-3 " +
          (hide ? "hidden" : null)
        }
      >
        {show
          ? category.map((item) => (
              <button className=" w-fit bg-[#F5F8FE] m-1 font-bold rounded-l-2xl  rounded-r-2xl px-5 py-2">
                {item}
              </button>
            ))
          : category
              .slice(0, 8)
              .map((item) => (
                <button className=" w-fit bg-[#F5F8FE] m-1 font-bold rounded-l-2xl  rounded-r-2xl px-5 py-2">
                  {item}
                </button>
              ))}
      </div>

      {!show ? (
        !hide ? (
          <div className="flex">
            <img src="tick.png" width={40} />
            <button
              className="text-xs text-[#2D4EE5] font-bold underline"
              onClick={showPanel}
            >
              Show all categories
            </button>
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export default RightCategory;
