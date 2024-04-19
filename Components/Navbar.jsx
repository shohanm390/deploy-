import Image from "next/image";
import design from "@/images/design.png";

function Navbar() {
  return (
    <div className="md:px-44">
      <div className="flex justify-between items-center">
        <Image className="md:w-36 w-20" src={design}></Image>
        <div className="md:static absolute right-5">
          <button className="mr-7 text-lg font-semibold hover:text-purple-700 duration-500">
            Mentorship
          </button>
          <button className="text-purple-500 border-2 text-lg border-purple-700 rounded-full px-2 py-1 hover:text-white hover:bg-purple-700 duration-500">
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
