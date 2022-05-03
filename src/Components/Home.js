import React from 'react';
import Header from './Header';
import Footer from './Footer'; // eslint-disable-next-line
import { BrowserRouter as Route,Link} from 'react-router-dom';
class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="wrapper">
					<Header />
					<section id="banner">
						<div class="inner">
							<span class="image">
								<img src="images/home-banner.jpg" alt="" />
							</span>
							<header class="major">
								<h1>Hi, <br />Welcome to Wash & Dry</h1>
							</header>
							<div class="content">
								<p>We are #1 top customer service rated in Arlington</p>
							</div>
							<ul class="actions">
								
								<li><Link to="/services" class="button primary">Services</Link></li>
								<li><Link to="/contact" class="button">Contact</Link></li>
								
							</ul>
						</div>
					</section>
					{/*<!-- Main --> */}
					<div id="main">
						{/*< !-- One -- >*/}
						<section id="one" class="spotlights">
							<section>
								<img class="image" src="images/about-us.jpg" alt="about-us" data-position="center center" />
								<div class="content">
									<div class="inner">
										<header class="major">
											<h3>About Us</h3>
										</header>
										<p>Wash & Dry is a community-based Laundry room that is privately run. We're committed to offering the greatest possible service as well as the clean and coziest facility. We're a small company, but one of the finest in the town—we offer the latest washing equipment that can handle even the heaviest loads, as well as enough dryers to ensure that one is always accessible.</p>
										<ul class="actions">
										
											<li><Link to="/about" class="button">Learn more</Link></li>
										
										</ul>
									</div>
								</div>
							</section>
						</section>
						{/*<!-- Testimonials --> */}
						<section id="three">
							<div class="inner">
								<header class="major">
									<h1>Services</h1>
								</header>
								<div class="row">
									<div class="col-4 col-12-medium padding-10">
										<div class="card">
											<img src="images/about-banner.jpg" alt="Washing + Drying" />
											<div class="card-body">
												<h4>Washing + Drying</h4>
												<p>Wash & dry is a budget laundry service. Each order is washed in a machine that uses ozone water to wash and rinse the laundry</p>
												<ul class="actions small">
												
													<li><Link to="/services" class="button small">Learn More</Link></li>
												
												</ul><br />
											</div>
										</div>
									</div>
									<div class="col-4 col-12-medium">
										<div class="card">
											<img src="images/all-serv.jpg" alt="Washing + Drying" />
											<div class="card-body">
												<h4>Washing + Drying + Ironing</h4>
												<p>Wash & dry is a budget laundry service. Each order is washed in a machine that uses ozone water to wash and rinse the laundry</p>
												<ul class="actions small">
												
													<li><Link to="/services" class="button small">Learn More</Link></li>
												
												</ul><br />
											</div>
										</div>
									</div>
									<div class="col-4 col-12-medium">
										<div class="card">
											<img src="images/iron.jpg" alt="Washing + Drying" />
											<div class="card-body">
												<h4>Ironing</h4>
												<p>We have the most trained staff to ensure perfect iron press for your clothes. We handfold and sort the laundry.</p>
												<ul class="actions small">
												
													<li><Link to="services.html" class="button small">Learn More</Link></li>
												
												</ul><br />
											</div>
										</div>
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
								<p>Schedule your order online or visit our store</p>
								<ul class="actions">
								
									<li><Link to="/contact" class="button">Contact Us</Link></li>
								
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
export default Home;