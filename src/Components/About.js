import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';// eslint-disable-next-line 
import { BrowserRouter as Route, Link} from 'react-router-dom';
class About extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/*<!-- Wrapper --> */}
				<div id="wrapper">
					<Header />
					<section id="banner-sub">
						<div class="inner">
							<header class="major">
								<h1>About US</h1>
							</header>
							<div class="content">
							</div>
						</div>
					</section>
					{/*<!-- Main --> */}
					<div id="main">
						{/*	<!-- One --> */}
						<section id="one">
							<div class="inner">
								<p>Wash & Dry is a community-based Laundry room that is privately run. We're committed to offering the greatest possible service as well as the clean and coziest facility. We're a small company, but one of the finest in the town—we offer the latest washing equipment that can handle even the heaviest loads, as well as enough dryers to ensure that one is always accessible. We have a team of polite and professional Customer Service Representatives on hand to assist you whenever you have a question or require assistance.</p>
							</div>
						</section>
						<section id="two">
							<div class="inner">
								<header class="major">
									<h1>Testimonials</h1>
								</header>
								<div class="row">
									{/*<!-- Break -->*/}
									<div class="col-4 col-12-medium">
										<p><q>They offer the best service in the city. They offer online delivery as well which is nice</q></p>
										<h3>- Rahul Doe</h3>
									</div>
									<div class="col-4 col-12-medium">
										<p><q>My one stop solution for my laundry needs. Never stood in a queue for the laundry</q></p>
										<h3>- Sasi Kalyan</h3>
									</div>
									<div class="col-4 col-12-medium">
										<p><q>The staff are very friendly, Equipment is well maintained and prices are affordable</q></p>
										<h3>- Avinash Verma</h3>
									</div>
								</div>
							</div>
						</section>
						{/*<!-- Three -->*/}
						<section id="three">
							<div class="inner">
								<header class="major">
									<h2>Want to get your laundry done?</h2>
									<h3>What are you waiting for....</h3>
								</header>
								<ul class="actions">
								
								<li><Link to="/services" class="button primary">Services</Link></li>
								<li><Link to="/contact" class="button">Contact</Link></li>
								
								</ul>
							</div>
						</section>
					</div>
					<Footer />
				</div>
			</React.Fragment>
		)
	}
}
export default About;