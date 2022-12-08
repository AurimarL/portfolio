import SectionSepare from '../components/SectionSepare';
import MeSection from '../views/Me';
import ProjectsSection from '../views/Projects';
import SkillsSection from '../views/Skills';

// import Button from '../components/Button';
// import ContactMe from '../views/ContactMe';

export default function Home() {
    return (
        <main>
            <section id="Me">
                <MeSection />
            </section>

            <section id="Skills">
                <SectionSepare SectionName="Skills" />
                <SkillsSection />
            </section>

            <section id="Projetos">
                <SectionSepare SectionName="Projects" />
                <ProjectsSection />
            </section>
            {/*
				<section id="Servicos" className="m-4" />
				<section id="Portofolio" className="m-4" />
			*/}
            {/*
					<section id="Contactar">
						<SectionSepare SectionName="contact" />
						<ContactMe />
					</section>*/}

            {/*
					<section className="text-center">
					<button
						className="border-2 w-2/6 text-center p-2 rounded"
						onClick={() => {
							try {
								download('../assets/CV.pdf', 'AurimarLopes_CV')
							} catch (error) {
								console.log(error)
							}
						}}>
						<GrDocumentPdf /> CV
					</button>
				</section>
					*/}
        </main>
    );
}
