import { dataAcademic } from "../../../@helpers/data";
import HistoryCard from "../_components/HistoryCard";
import Title from "../_components/Title";

export default function AcademicEducation(){
  return(
    <section id="skills" className="bg-blue-50 w-full flex justify-center py-5">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Formação Acadêmica"/>
        <HistoryCard data={dataAcademic}/>
      </div>
    </section>
  )
}