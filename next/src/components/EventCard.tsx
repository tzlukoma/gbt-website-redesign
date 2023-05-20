import React from 'react';
import { displayLocalTimeZone } from '../utils/timeFormats';
import { Event } from '@/types/Event';

interface Props {
	event: Event | undefined;
}

function EventCard({ event }: Props) {
	if (event === undefined) return null;
	return (
		<div className="p-8  bg-light-100 border-dashed border-4 border-grey-100 shadow-md">
			<div className="pb-2 text-lg font-bold font-display">
				{displayLocalTimeZone(event?.node?.date, 'ddd')}
			</div>
			<div className="pb-2 text-4xl font-bold font-display">
				<span>{displayLocalTimeZone(event?.date, 'D MMM')}</span>
				<span className="font-light font-serif text-primary-200">{`  |`}</span>
				<span className="ml-3 text-2xl text-primary-400">
					{displayLocalTimeZone(event?.node?.date, 'h:mm a')}
				</span>
			</div>
			<h3 className="mt-0 text-2xl">{event?.title}</h3>
			<div className="mb-5">
				<p className="text-lg text-primary-600">
					{event?.synopsis && event?.synopsis[0].children[0].text}
				</p>
			</div>
			{event?.registerUrl && (
				<button className="mb-5 px-5 py-3 rounded bg-primary-700 hover:bg-primary-100 text-white">
					<a href={event?.registerUrl || ''}>Register Here</a>
				</button>
			)}

			<div className="col-start-1 col-span-2">
				<a
					className="flex items-center no-underline hover:underline text-black"
					href={event?.node?.publishPlatform?.platformUrl || ''}>
					{event?.node?.publishPlatform?.platformImage ? null : (
						// <Img
						//   fluid={
						//     event?.node?.publishPlatform?.platformImage?.asset?.fluid
						//   }
						//   className="block rounded-full h-8 w-8"
						// />
						<img
							alt="Placeholder"
							className="block rounded-full h-8 w-8"
							src={'/set-4-life-logo.png'}
						/>
					)}
					<p className="m-3 text-sm xl:text-md 2xl:text-lg">
						{event?.node?.publishPlatform?.name}
					</p>
				</a>
			</div>
		</div>
	);
}

export default EventCard;
