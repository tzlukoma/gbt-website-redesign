'use client';
import React from 'react';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/utils/sanity';

interface NextImageProps {
	sanityImage: any;
	className?: string;
	sizes?: string;
	style?: string;
	placeholder?: string;
	altText: string;
}

const NextImage = ({
	sanityImage,
	className,
	sizes,
	style,
	placeholder,
	altText,
}: NextImageProps) => {
	const imageProps = useNextSanityImage(client, sanityImage);
	return (
		<Img
			{...imageProps}
			className={className}
			placeholder={placeholder ? placeholder : null}
			alt={altText}
		/>
	);
};

export default NextImage;
