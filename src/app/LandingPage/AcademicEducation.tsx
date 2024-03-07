import { dataAcademic } from "../../../@helpers/data";
import HistoryCard from "../../components/HistoryCard";
import Title from "../../components/Tittle";

export default function AcademicEducation(){
  return(
    <section id="academicEducation" className="bg-blue-50 w-full flex justify-center py-5 pt-[8vh]">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Formação Acadêmica"/>
        <HistoryCard data={dataAcademic}/>
      </div>
    </section>
  )
}