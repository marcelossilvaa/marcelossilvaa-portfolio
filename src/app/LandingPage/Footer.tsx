import Title from "../../components/Tittle";

export default function Footer(){
  return(
    <footer id="contact" className="w-full bg-blue-50 py-8">
      <div className="flex flex-col justify-center items-center gap-1 text-sm md:text-lg">
        <Title title="Contato" />
        <p>Entre em contato, estou sempre disponível.</p>
        <a href="https://www.instagram.com/marcelossilva1/" target="_blank">
          Instagram:  @marcelossilva1
        </a>
        <a href="https://wa.me/5577991219434" target="_blank">
          WhatsApp:(77)991219434
        </a>     
        <a href="">
          marcelo_810@hotmail.com
        </a>
        <p>
          Desenvolvido por Marcelo S Silva
        </p>
        <p >© Copyright 2023</p>
      </div>
    </footer>
  )
}