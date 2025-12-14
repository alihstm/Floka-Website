import { useParams } from "react-router-dom";
import images from "../../Data/imagePaths";
import data from "../../Data/data.json";

const Works = () => {
  const { category } = useParams();
  const categoryData = data.categories.find((c) => String(c.id) === category);

  if (!categoryData) {
    return <p>چنین دسته‌ای یافت نشد.</p>;
  }

  return (
    <main className="flex flex-col items-center w-full min-h-[100vh] py-10 sm:px-20 px-3 bg-bg">
      <h1 className="sm:text-4xl text-3xl kalame-font text-primary mb-15">
        {categoryData.title}
      </h1>
      <div className="grid sm:grid-cols-2 w-full sm:gap-30 gap-20">
        {categoryData.projects.map((p) => (
          <div key={p.id} className="rounded-2xl bg-black/50 transition-all sm:p-5 p-3">
            <div className="relative group">
              <img
                src={images[p.image]}
                alt={p.name}
                className="w-full sm:h-48 h-38 object-cover mb-4 rounded-xl"
              />

              <div className="rounded-xl absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm vazir-font sm:text-lg text-sm hover:underline underline-offset-7 transition duration-150 font-semibold text-center sm:p-1 p-2 sm:w-30 w-25 border border-primary bg-black text-primary"
                  >
                    گیتهاب
                  </a>
                )}

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm vazir-font sm:text-lg text-sm hover:underline underline-offset-7 transition duration-150 font-semibold text-center sm:p-1 p-2 sm:w-30 w-25 border border-primary bg-black text-primary"
                  >
                    دمو
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <h2 className="vazir-font sm:text-xl text-md font-bold text-primary">{p.name}</h2>
              <p className="text-secondary sm:text-base text-xs mt-2 vazir-font">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Works;
