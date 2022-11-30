import Header from '../components/header';
import PayPal from '../components/paypal';

const Donate = () => {
	return (
		<div className="w-full h-screen bg-chill-bg flex flex-col px-4 overflow-y-scroll pb-12">
			<Header />
			<div className="w-full flex flex-col mt-20">
				<span className="mx-auto text-4xl font-lg text-sky-700">
					Donate.
				</span>
				<span className="flex flex-col w-2/3 text-left mx-auto mt-6 text-sm font-semibold text-gray-800">
					<span>
						The San Diego Chill is{' '}
						<span className="font-bold italic text-sky-700">
							100% free
						</span>{' '}
						to join & play.
					</span>
					<span>This includes most / all neccesary equipment.</span>
					<span className="mt-4">
						In order to make this happen we rely{' '}
						<span className="italic font-bold text-sky-900">
							entirely
						</span>{' '}
						on donations from our community.
					</span>
					<span>
						Over the course of 10 years we have humbled and
						fortunate enough to have the support of San Diego.
						However, with rising costs and hockey becoming more
						expensive than ever, we are always fighting to keep the
						Chill alive.
					</span>
					<span className="mt-6">
						<span className="italic font-bold">
							All donations are 100% tax deductible.
						</span>{' '}
						For larger donors we offer tokens of our gratitude
						ranging from a thank you card to a signed jersey from
						the team. We are also always eager to highlight our
						community partners and are open to finding ways to make
						sure that your donation is properly honored!
					</span>
					<span className="mt-12">
						Please click the button below to donate, or reach out to
						us directly! <br></br>
					</span>
					<span className="mt-8">Thank you and go Chill!</span>
					<span className="flex flex-col mt-4 text-left font-medium">
						<span>Ryan Labrum</span>
						<span>President, San Diego Chill</span>
					</span>
				</span>
				<div className="mx-auto">
					<PayPal />
				</div>
			</div>
		</div>
	);
};
export default Donate;
