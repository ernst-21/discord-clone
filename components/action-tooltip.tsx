'use client';

import {
	Tooltip,
	TooltipProvider,
	TooltipContent,
	TooltipTrigger,
} from '@radix-ui/react-tooltip';

interface ActionToolTipProps {
	label: string;
	children: React.ReactNode;
	side?: 'top' | 'right' | 'bottom' | 'left';
	align?: 'start' | 'center' | 'end';
}

const ActionToolTip = ({
	label,
	children,
	side,
	align,
}: ActionToolTipProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={50}>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent side={side} align={align}>
					<p className='font-semibold text-sm capitalize bg-black rounded-[5px] p-2'>
						{label.toLowerCase()}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default ActionToolTip;
