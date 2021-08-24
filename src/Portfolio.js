
import Carousel from 'react-elastic-carousel'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import WeatherApp from './img/WeatherApp.png'
import Extension from './img/ChromeExtension.PNG'

function Portfolio() {

	const items = [
		{ id: 1, title: 'Games Search Page', info: 'ReactJS, Tailwind CSS, Redux toolkit', img: 'https://user-images.githubusercontent.com/84050601/129501289-1215a4f0-c4b5-42f2-af1b-819ca4485a23.gif', link: 'https://github.com/rafaelcruz94/Games-Search' },
		{ id: 2, title: 'Notes App', info: 'ReactJS, SASS, Material UI', img: 'https://user-images.githubusercontent.com/84050601/129591288-6f73692d-afc3-4d67-99ed-50677f13adfd.gif', link: 'https://github.com/rafaelcruz94/Notes-App' },
		{ id: 3, title: 'Weather App', info: 'JS/HTML/CSS and Apache Cordova', img: `${WeatherApp}`, link: 'https://github.com/rafaelcruz94/Weather-App' },
		{ id: 4, title: 'Exchange Rate-Chrome Extension', info: 'JS/CSS/HTML', img: `${Extension}`, link: 'https://github.com/rafaelcruz94/ExchangeRate-ChromeExtension' },
		{ id: 5, title: 'Todo List', info: 'JS/CSS/HTML', img: 'https://user-images.githubusercontent.com/84050601/129501741-886dbb98-7955-40d4-a069-f39ca13160d3.gif', link: 'https://github.com/rafaelcruz94/todoApp' }
	];

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1, itemsToScroll: 2 },
		{ width: 768, itemsToShow: 2 },
		{ width: 1080, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 3 },
	];

	return (
		<div className='portfolio'>
			<h1>Projects</h1>
			<div className='carousel-wrapper'>
				<Carousel breakPoints={breakPoints}>
					{items.map((item) => (
						<div className='item' key={item.id}>
							<h3>{item.title}</h3>
							<img
								src={item.img}
								alt={item.title}
							/>
							<small>{item.info}</small>
							<a className='demo' href={item.link} target='_blank' rel="noreferrer">
								Demo & Code <ArrowForwardIosIcon />
							</a>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
}

export default Portfolio;
