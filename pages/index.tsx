import type {NextPage} from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionSepare from '../components/SectionSepare'
import ContactMe from '../views/ContactMe'
import MeSection from '../views/Me'
import ProjectsSection from '../views/Projects'
import SkillsSection from '../views/Skills'
import { GrDocumentPdf } from 'react-icons/gr'


const Home: NextPage = () => (
	<>
		<Head>
			<title>Aurimar Lopes</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content="Portfolio do Aurimar" />
		</Head>

		<div id="Home"></div>

		<Header />
		<div className="container flex flex-col  gap-4">
			<section id="Me">
				<MeSection />
			</section>

			<section id="Skills">
				<SectionSepare SectionName="Skills">
					<SkillsSection />
				</SectionSepare>
			</section>

			<section id="Projetos" className="">
				<SectionSepare SectionName="Projects">
					<ProjectsSection />
				</SectionSepare>
			</section>
			{/*
				<section id="Servicos" className="m-4" />
				<section id="Portofolio" className="m-4" />
			*/}

			<section id="Contactar" className="">
				<SectionSepare SectionName="contact">
					<ContactMe />
				</SectionSepare>
			</section>
			<section className='text-center'>
				<button className='border-2 w-2/6 text-center p-2 rounded' >
					<a href='../assets/CV.pdf' download className='flex flex-row justify-center gap-2 no-underline text-black'>
						<GrDocumentPdf /> CV
					</a>
				</button>
			</section>
		</div>
		<Footer />
	</>
)

export default Home
