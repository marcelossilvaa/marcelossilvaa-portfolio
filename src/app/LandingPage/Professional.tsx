import { dataProfessional } from "../../../@helpers/data";
import HistoryCard from "../../components/HistoryCard";
import Title from "../../components/Tittle";

export default function Professional(){
  return(
    <section id="professional" className="bg-blue-50 w-full flex justify-center py-5">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center ">
        <Title title="Histórico Profissional"/>
        <HistoryCard data={dataProfessional}/>
      </div>
    </section>
  )
}