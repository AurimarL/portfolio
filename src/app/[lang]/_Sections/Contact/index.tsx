import SocialMediasContact from "@/components/SocialMediasContact";
import ContactForm from "./ContactForm";

export default function ContactSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section id="contact">
      <div className="flex flex-wrap lg:justify-between  ">
        <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
          <div className="max-w-2xl  m-4">
            <h2
              className="
                  mb-6
                  uppercase
                  font-bold
                  text-xl
                  md:text-3xl
                  "
            >
              {title}
            </h2>
            <p className="leading-relaxed ">{description}</p>
            <br />
            <SocialMediasContact />
          </div>
          <br />
        </div>
        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
