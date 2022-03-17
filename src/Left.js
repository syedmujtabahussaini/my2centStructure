import LeftButtonPanel from "./LeftButtonPanel";
import LeftIconPanel from "./LeftIconPanel";
import LeftInnerPanel from "./LeftInnerPanel";

function Left() {
  return (
    <div class="min-w-fit w-3/12   border-r-[1px] border-gray-300">
      <LeftIconPanel />
      <LeftInnerPanel />
      <LeftButtonPanel />
    </div>
  );
}
export default Left;
