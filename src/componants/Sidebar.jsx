import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelected, selectedProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          // ตรวจสอบว่า project ถูกเลือกหรือไม่
          const isSelected = project.id === selectedProjectId;

          // จัดการ class สำหรับโปรเจคที่ถูกเลือก และไม่ถูกเลือก
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          
          // ถ้าโปรเจคถูกเลือก
          if (isSelected) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelected(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

