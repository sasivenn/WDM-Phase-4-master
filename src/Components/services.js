import React from 'react';
import Header from './Header';
import Footer from './Footer';
class services extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/*<!-- Wrapper -->*/}
				<div id="wrapper">
				    <Header />
					<section id="banner-sub">
						<div class="inner">
							<header class="major">
								<h1>Services</h1>
							</header>
						</div>
					</section>
					{/* <!-- Main --> */}
					<div id="main">
						{ /* <!-- One --> */}
						<section id="one" class="spotlights">
							<section>
								<img class="image" src="images/about-banner.jpg" alt="about-us" data-position="center center" />
								<div class="content">
									<div class="inner">
										<header class="major">
											<h3>Washing + Drying</h3>
										</header>
										<p>Wash & dry is a budget laundry service. Each order is washed in a machine that uses ozone water to wash and rinse the laundry, which has sanitising properties. Wash & dry laundry service saves you more time than washing clothes at the laundromat yourself and is less expensive than full-service fluff and fold laundry.</p>
									</div>
								</div>
							</section>
							<section>
								<img class="image" src="images/all-serv.jpg" alt="" data-position="top center" />
								<div class="content">
									<div class="inner">
										<header class="major">
											<h3>Washing + Drying + Ironing</h3>
										</header>
										<p>Wash & dry is a budget laundry service. Each order is washed in a machine that uses ozone water to wash and rinse the laundry, which has sanitising properties. Wash & dry laundry service saves you more time than washing clothes at the laundromat yourself and is less expensive than full-service fluff and fold laundry.<br />Sorting, folding and ironing the laundry after drying are included.</p>
									</div>
								</div>
							</section>
							<section>
								<img class="image" src="images/iron.jpg" alt="" data-position="25% 25%" />
								<div class="content">
									<div class="inner">
										<header class="major">
											<h3>Ironing</h3>
										</header>
										<p>We have the most trained staff to ensure perfect iron press for your clothes. We handfold and sort the laundry once the drying is done. The cost is included in the fee</p>
									</div>
								</div>
							</section>
						</section>
					</div>
					<Footer />
				</div>
			</React.Fragment>
		)
	}
}
export default services;
