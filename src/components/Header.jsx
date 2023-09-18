import '../styles/global.css';
import logoImage from '../assets/dog.png';
import closeButton from '../assets/close.svg';
import menuButton from '../assets/burger.svg';

export default function Header(props) {
	console.log(props.user);
	function handleClick() {
		const nav = document.getElementById('nav');
		const burger = document.getElementById('burger');
		const close = document.getElementById('close');
		const links = document.querySelectorAll('li');

		links.forEach((link) => {
			link.addEventListener('click', () => {
				nav.classList.remove('translate-x-0');
				nav.classList.add('translate-x-[250px]');
				burger.classList.remove('hidden');
				close.classList.add('hidden');
			});
		});
		if (nav.classList.contains('translate-x-0')) {
			nav.classList.remove('translate-x-0');
			nav.classList.add('translate-x-[250px]');
			burger.classList.remove('hidden');
			close.classList.add('hidden');
		} else {
			nav.classList.remove('translate-x-[250px]');
			nav.classList.add('translate-x-0');
			burger.classList.add('hidden');
			close.classList.remove('hidden');
		}
	}

	return (
		<header className="py-2 shadow-md sticky top-0 z-10 bg-white" transition:persist="true">
			<div className="px-24 max-sm:px-5 max-w-7xl mx-auto w-full flex justify-between items-center m-auto ">
				<a href="" className="flex items-center">
					<img src={logoImage.src} alt="Placeholder" height={60} width={60} onClick={handleClick} />
					<h1 className="ml-3">Hound Hub</h1>
				</a>
				<ul
					id="nav"
					className="transition-all flex flex-col top-0 right-0 h-screen md:h-auto w-[250px] md:w-auto translate-x-[250px] md:translate-x-0 text-right p-6 pt-10 md:p-0 ms:pt-0 bg-white fixed md:relative md:flex-row gap-6 md:gap-8  shadow-2xl z-50">
					<img src={closeButton.src} alt="" width="30" className="md:hidden translate-x-[160px]  -translate-y-[20px] " id="close" onClick={handleClick} />
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
				<div className="user-login">
					{props.user ? (
						<a href="/profile" className="flex items-center">
							<img src={props.user.photoURL} alt="" className="rounded-full h-10 w-10" />
							<p className="ml-2">{props.user.displayName}</p>
						</a>
					) : (
						<a href="/signin" className="flex items-center">
							<p className="ml-2">Login</p>
						</a>
					)}
				</div>
				<img src={menuButton.src} width="40" alt="" className="md:hidden" id="burger" onClick={handleClick} />
			</div>
		</header>
	);
}
