import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return (
    <div className="w-full h-full p-2 flex flex-col background items-center">
      
      <h1 className="bg-white text-center w-11/12 mx-auto mt-[40px] py-2 rounded-lg 
          text-lg font-bold">RANDOM GIFs</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>

    </div>
  );
}
