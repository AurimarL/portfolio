import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
export default function Header() {
	const Data = ['Skills', 'Projetos', 'Contactar']
	return (
		<Navbar bg="white" sticky="top" expand="lg">
			<Container>
				<Navbar.Brand href="#Home">
					<p className="text-3xl">
						{'< '}Aurimar{' />'}
					</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav className=" justify-content-end">
						{Data.map((name, i) => {
							return (
								<Nav.Link key={i} href={'#' + name}>
									<p className="text-3xl">{name}</p>
								</Nav.Link>
							)
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
