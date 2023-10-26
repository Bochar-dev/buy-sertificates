import classNames from 'classnames';
import { useId, forwardRef } from 'react';
import './input.scss';

type InputProps = {
	label?: string;
	placeholder?: string;
	className?: string;
	isEroror?: boolean;
	errorText?: string;
} & React.HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, placeholder, className, isEroror, errorText, ...props }, ref) => {
		const inputId = useId();

		return (
			<div className={classNames('input', { className: !!className })}>
				{label && (
					<label className='input__label' htmlFor={inputId}>
						{label}
					</label>
				)}
				<input
					ref={ref}
					className={classNames('input__field', {
						'input__field--error': isEroror,
					})}
					id={inputId}
					type='text'
					placeholder={placeholder}
					{...props}
				/>

				{isEroror && <span className='input__error-text'>{errorText}</span>}
			</div>
		);
	}
);

export default Input;
