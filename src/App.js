import Left from "./Left";

function App() {
  return (
    <>
      <div class="flex ">
        <Left />
        <div class="item w-9/12 h-32 border-2 border-black fixed bg-orange-500 right-0 ">
          search bar
        </div>

        <div class="item w-6/12 h-[973px] border-2 border-black bg-zinc-500 mt-[127px]">
          middle section
        </div>
        <div class="item w-3/12 h-[973px] border-2 border-black bg-zinc-500 mt-[127px]">
          right section
        </div>
      </div>

      <div class="h-20   border-2 border-black bg-orange-500 ">Footer</div>
    </>
  );
}

export default App;
