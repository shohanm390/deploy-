
const Section1 = () => {
  const serviceArray = [
    {
      icon: "fa-solid fa-layer-group",
      sName: "Designer",
      desc: "I value simple content structure, clean design patterns, and thoughtful interactions.",
      title: "Things I enjoy designing:",
      ts: "UX, UI, Web, Apps, Logos",
      dt: "Design Tools : ",
      li: ["Affinity Designer", "Figma", "Pen & Paper", "Sketch"],
    },
    {
      icon: "fa-solid fa-terminal",
      sName: "Frontend Developer",
      desc: "I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
      title: "Experiences I draw from:",
      ts: "UX/UI, Product design, Freelancing",
      dt: "Dev Tools : ",
      li: ["VS Code", "Chat-GPT", "Bootstrap", "Github","Copilot","Netlify","Next JS" ," Tailwind CSS"],
    },
    {
      icon: "fa-solid fa-book",
      sName: "Languages",
      desc: "I genuinely care about people, and enjoy helping them work on their craft.",
      title: " Languages I speak:",
      ts: "HTML, Pug, Slim, CSS, Sass, Git",
      dt: "Mentor Stats : ",
      li: ["HTML", "CSS", "JavaScriot", "Bootstrap5","TailwindCSS",,"Next JS","Node JS","Express JS", "MongoDB"],
    },
  ];
  return (
    <div className="mt-44 mb-20">
      <img
        className=" md:w-2/4 mx-auto "
        src={"https://bishcodev.com/static/img/techVector.svg"}
      ></img>
      <div className="bg-gradient-to-l  from-purple-800 via-purple-600 to-purple-800 py-44">
        <h1 className="text-center text-4xl text-white font-sans font-semibold">
          Hi, I’m Shohan. Nice to meet you.
        </h1>
        <p className="text-gray-100 text-lg md:w-2/6 p-1 text-center mx-auto mt-10">
          Since beginning my journey as a freelance designer 12 years ago, I've
          done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops.
        </p>
      </div>
      <div className="flex bg-white border-2 md:w-2/3 mx-2 md:flex-row flex-col md:mx-auto -mt-28 rounded-lg">
        {serviceArray.map((item, index) => (
          <div key={index} className="text-center py-10 border">
              <i
                className={`${item.icon} bg-green-400 mb-8 text-3xl rounded-full p-4 text-gray-800`}
              ></i>
              <h1 className="text-2xl font-bold mb-5">{item.sName}</h1>
              <p className="px-10 text-lg">{item.desc}</p>
              <h2 className="mb-3 text-purple-700 font-semibold text-lg">{item.title}</h2>
              <h3 className="font-semibold">{item.ts}</h3>
                <h1 className="mt-5 mb-3 text-purple-700 font-semibold text-lg">{item.dt}</h1>
                <ul>{item.li.map((li,i)=>(
                    <li className="my-2 text-gray-900 " key={i}>{li}</li>
                ))}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
