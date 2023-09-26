import SocialMediasContact from "@/components/SocialMediasContact";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section>
      <div className="flex flex-wrap lg:justify-between ">
        <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
          <div className="max-w-[570px] mb-2 lg:mb-0 m-4">
            <h2
              className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
            >
              📞 ENTRE EM CONTATO 📧
            </h2>
            <p className="text-base text-body-color leading-relaxed mb-9">
              📩 Envie uma mensagem para descobrir mais sobre os meus serviços e
              projetos. Estou ansioso para ouvir de você e responder a todas as
              suas perguntas!
            </p>
          </div>
          <SocialMediasContact />
        </div>
        {/* <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
          <ContactForm />
  </div>*/}
      </div>
    </section>
  );
}
