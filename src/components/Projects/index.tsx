import { dataAcademic } from "../../../@helpers/data";
import ProjectDisplay from "../_components/ProjectDisplay";
import Title from "../_components/Title";

export default function Projects(){
  return(
    <section id="projects" className="bg-slate-50 w-full flex justify-center py-5">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Projetos"/>
        <ProjectDisplay />
      </div>
    </section>
  )
}