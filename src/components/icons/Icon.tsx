import React from 'react';

type IconProps = { name: string; prefix?: string } & React.HTMLAttributes<HTMLElement>;

export const Icon: React.FC<IconProps> = ({ name, prefix = 'fa-solid', className, ...props }) => (
	<i
		className={`${prefix} fa-${name}${className ? ` ${className}` : ''}`}
		aria-hidden="true"
		{...props}
	/>
);

const wrap =
	(name: string, prefix?: string): React.FC<React.HTMLAttributes<HTMLElement>> =>
	props => <Icon name={name} prefix={prefix} {...props} />;

export const BookIcon = wrap('book');
export const BookOpenIcon = wrap('book-open');
export const ChevronDownIcon = wrap('chevron-down');
export const CloseIcon = wrap('xmark');
export const CoffeeIcon = wrap('mug-hot');
export const EarthIcon = wrap('earth-americas');
export const EyeIcon = wrap('eye');
export const EyeIrisIcon = wrap('eye', 'fa-regular');
export const EyeOffIcon = wrap('eye-slash');
export const GlobeIcon = wrap('globe');
export const HamburgerIcon = wrap('bars');
export const HeartIcon = wrap('heart');
export const InfoIcon = wrap('circle-info');
export const LogoIcon = wrap('bullseye');
export const MapFoldIcon = wrap('map');
export const MapPinIcon = wrap('location-dot');
export const MagnifyIcon = wrap('magnifying-glass');
export const PauseIcon = wrap('pause');
export const PersonIcon = wrap('user');
export const PlayIcon = wrap('play');
export const ResetIcon = wrap('rotate-left');
export const SkipBackIcon = wrap('backward-step');
export const SkipForwardIcon = wrap('forward-step');
export const WarningIcon = wrap('triangle-exclamation');
