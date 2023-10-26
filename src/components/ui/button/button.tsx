import classNames from 'classnames';
import './button.scss';

type ButtonProps = {
	children?: React.ReactNode;
	className?: string;
	variant?: 'white' | 'grey';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	className,
	children,
	variant = 'grey',
	...props
}: ButtonProps) => {
	return (
		<button
			className={classNames(
				'button',
				{ [className as string]: !!className },
				{ [`button--${variant}`]: !!variant }
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
