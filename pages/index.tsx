import type {NextPage} from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionSepare from '../components/SectionSepare'
import ContactMe from '../views/ContactMe'
import MeSection from '../views/Me'
import ProjectsSection from '../views/Projects'
import SkillsSection from '../views/Skills'
import {GrDocumentPdf} from 'react-icons/gr'
import Button from '../components/Button'
import useDownloader from 'react-use-downloader'

const Home: NextPage = () => {
	const {size, elapsed, percentage, download, cancel, error, isInProgress} =
		useDownloader()

	return (
		<>
			<Head>
				<title>Aurimar Lopes</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Portfolio do Aurimar" />
			</Head>

			<div id="Home"></div>

			<Header />
			<main className="container">
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
					</section>*/
				}

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
			<Footer />
		</>
	)
}

export default Home
