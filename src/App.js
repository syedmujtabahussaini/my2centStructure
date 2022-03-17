import Footer from "./Footer";
import Left from "./Left";
import Right from "./Right";

function App() {
  return (
    <>
      <div class="flex ">
        <Left />
        <div class=" min-w-fit item w-9/12 h-[168px] border-[2px] border-gray-100 fixed bg-white right-[-28px] ">
          search bar
        </div>
        <div class="min-w-fit item w-6/12 h-[1400px]  mt-[170px]">
          middle section
        </div>
        <Right/>
      </div>
      <Footer />
    </>
  );
}

export default App;
