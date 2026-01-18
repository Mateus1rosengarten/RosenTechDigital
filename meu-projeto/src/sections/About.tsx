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
        SOBRE O GRUPO M2
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
          <div className="text-justify font-inter text-base text-foreground sm:text-xl xl:text-2xl xl:tracking-wide 2xl:leading-loose">
            <span className="block leading-relaxed">
              O Grupo M2 nasceu da necessidade de compreender o negócio dentro
              dos marketplaces de forma completa e estratégica. Estar presente
              nas plataformas não é suficiente quando não há um gerenciamento
              capaz de entregar resultados reais e consistentes. Da mesma forma,
              resultados sem gestão não se sustentam, é como pilotar uma Ferrari
              sem destino definido.
            </span>

            <span className="block leading-relaxed">
              Foi a partir dessa visão que o Grupo M2 surgiu: da união de duas
              frentes que funcionam em perfeita harmonia: vender em escala e
              gerir o negócio com inteligência.
            </span>

            <span className="block leading-relaxed">
              É sobre crescer com sustentabilidade e decisões orientadas. Nosso
              trabalho vai muito além de vender o seu produto. É ir muito além.
            </span>
          </div>
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
