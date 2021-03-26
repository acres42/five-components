import React from 'react';
import {classnames} from 'tailwindcss-classnames';

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};

		this.toggleNavMenu = this.toggleNavMenu.bind(this);
	}

	toggleNavMenu() {
		this.setState({ isOpen: !this.state.isOpen });
	}

	render() {
		let menuIcon;

		if (this.state.isOpen) {
			menuIcon = (
				<path
					fillRule="evenodd"
					d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
				/>
			);
		} else {
			menuIcon = (
				<path
					fillRule="evenodd"
					d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
				/>
			);
		}
		return (
			<header className={classnames(`rounded-xl overflow-hidden bg-${this.props.bgColor} flex justify-between px-4 sm:py-3 sm:items-center shadow-${this.props.shadow} transform -skew-x-3`)}>
			{/* <header className="bg-gray-900 flex justify-between px-4 sm:py-3 sm:items-center"> */}
				<header className="flex items-center justify-between px-4 py-3 sm:p-0">
						<img className="h-24" src="/five-components/campfire.svg" alt="campfire" />
						<h2 className="text-white">AC's Component Demo</h2>
					<div className="sm:hidden">
						<button
							onClick={this.toggleNavMenu}
							type="button"
							className={classnames(`btnColor-${this.props.btnColor} hover:text-white focus:text-white focus:outline-none"`)}
						>
							<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
								{menuIcon}
							</svg>
						</button>
					</div>
				</header>

				<div className={this.state.isOpen ? 'px-2 pt-2 pb-4 block' : 'px-2 pt-2 pb-4 hidden sm:flex'}>
					<a
						href="https://www.mcdonalds.com/"
						className={classnames(`bg-cyan-500 m-2 py-1 block text-white font-semibold rounded px-2 transition-duration-300 ease-in-out hover:bg-${this.props.hoverColor} sm:mt-0 sm:ml-2"`)}
					>
						McDonald's
					</a>
					<a
						href="https://www.kfc.com/"
						className={classnames(`bg-cyan-500 m-2 py-1 block text-white font-semibold rounded px-2 transition-duration-300 ease-in-out hover:bg-${this.props.hoverColor} sm:mt-0 sm:ml-2"`)}
					>
						Kentucky Fried Chicken
					</a>
					<a
						href="https://www.pizzahut.com/"
						className={classnames(`bg-cyan-500 m-2 py-1 block text-white font-semibold rounded px-2 transition-duration-300 ease-in-out hover:bg-${this.props.hoverColor} sm:mt-0 sm:ml-2"`)}
					>
						Pizza Hut
					</a>
				</div>
			</header>
		);
	}
}

export default Navbar;
