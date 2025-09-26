import { motion } from "framer-motion";
import TechCarousel from "../components/ui/TechCarousel";
import WorkProcess from "../components/ui/WorkProcess";

const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="relative z-10 flex flex-col w-full px-6 py-8 bg-background sm:gap-10 sm:px-10 sm:py-20 md:px-12 xl:px-8 2xl:px-28"
    >
      <h2 className="sm:mx-none | mx-auto whitespace-nowrap font-varela text-2xl text-foreground sm:text-5xl">
        SOBRE A ROSENTECH
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col lg:flex-row"></div>
        <motion.div
          className="flex flex-col w-full space-y-4 sm:space-y-8 lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-justify font-inter text-base text-foreground sm:text-xl lg:!leading-relaxed xl:mt-8 xl:text-2xl xl:tracking-wide 2xl:!leading-loose">
            Vivemos uma era digital em que todo negócio — seja um comércio local
            ou uma grande empresa — está deixando de lucrar ao não investir em
            <span className={`${highlightClass}`}>
              presença online, automação e marketing estratégico.
            </span>
            &nbsp;A ROSENTECH nasceu para preencher essa lacuna, oferecendo
            soluções inteligentes e acessíveis que ajudam empresas a se
            destacarem no ambiente digital e alcançarem todo o seu potencial.
            Nossa missão é fazer seu negócio prosperar, atrair mais clientes e
            gerar resultados concretos. Dominamos as tecnologias mais modernas
            do mercado, aplicando as melhores práticas em desenvolvimento web,
            aplicativos, automação, SEO, campanhas digitais e produção
            audiovisual . Combinamos criatividade, performance e estratégia para
            oferecer soluções completas e sob medida para cada cliente.
            Acreditamos em parcerias de longo prazo. Nosso compromisso vai muito
            além de entregar um serviço: queremos caminhar ao seu lado,
            construindo soluções que evoluem junto com o seu negócio.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex w-full max-w-[600px] flex-col gap-4 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative h-60 w-full rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg sm:h-80 md:h-96 lg:h-[28rem]"
            style={{
              backgroundImage: "url('/images/sectionsImages/sobrenos.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <TechCarousel />
          <WorkProcess />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

const highlightClass = "highlight-marker";
