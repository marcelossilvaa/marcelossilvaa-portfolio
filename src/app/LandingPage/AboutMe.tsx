import Title from '../../components/Tittle';

export default function AboutMe() {
  return (
    <section id="aboutMe" className="bg-blue-100 w-full flex justify-center">
      <div className="flex flex-col items-start max-w-6xl w-[95%] py-[8vh]">
        <Title title="Sobre mim" />
        <div className="flex flex-col gap-3 w-full md:w-[60%]">
          <p>
            Fascinado por tecnologia, inovação e empreendedorismo. Além de odiar burocracia e
            sistemas ultrapassados.
          </p>
          <p>
            Sou ex graduando em Engenharia de Petróleo pela UFS, mas percebi que minha vocação
            sempre foi tecnologia, em 2021 migrei para desenvolvimento de software.
          </p>
          <p className="teste">Marcelo Santana Silva</p>
        </div>
      </div>
    </section>
  );
}
