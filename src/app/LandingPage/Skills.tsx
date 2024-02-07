import { dataSkills } from '../../../@helpers/data';
import SkillsCard from '../../components/SkillsCard';
import Title from '../../components/Tittle';

export default function Skills() {
  return (
    <section id="skills" className="bg-white-200 w-full flex justify-center py-5 py-[6vh]">
      <div className="max-w-6xl w-[95%] flex justify-center flex-col items-center">
        <Title title="Skills" />
        <div>
          <SkillsCard data={dataSkills} />
        </div>
      </div>
    </section>
  );
}
