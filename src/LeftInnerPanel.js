function LeftInnerPanel() {
  return (
    <div className="rounded-t-2xl rounded-b-2xl bg-white  h-[401px] max-w-[298px] translate-y-[-380px] translate-x-[30px] ">
      <img class="h=[120px] rounded-t-2xl" src="left-card.png" />
      <div className="h-[133px] border-b-[1px] border-gray-300 relative">
        <img
          class="h-[48px] w-[48px] rounded-[48px] absolute top-[-23px] left-[130px] outline outline-offset-2 outline-1 outline-gray-300 "
          src="person.jpg"
        />
        <div class="  pt-14">
          <p className="flex justify-center">mujtaba</p>
          <p className=" flex justify-center">professor, Pakistan</p>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div>
          <p>0 Posts</p>
          <p>0 Books</p>
          <p>0 Introductions</p>
          <p>0 Reuses</p>
        </div>
        <div>
          <p>0 Videos</p>
          <p>0 Ideas</p>
          <p>0 Podcasts</p>
          <p>0 SlowFood</p>
        </div>
      </div>
    </div>
  );
}

export default LeftInnerPanel;
