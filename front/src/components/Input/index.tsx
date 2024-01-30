import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: { message: string };
  label: string;
  id: string;
}

const Input = forwardRef(
  ({ error, label, id, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="inputBox flex flex-col gap-2 ">
        <label className="label font-semibold text-primary" htmlFor={id}>
          {label}
        </label>
        <input
          ref={ref}
          {...rest}
          className="h-[45px] px-[20px] bg-gray-100 border border-gray-300 focus:outline-none focus:border-primary rounded-md"
        />
        {error ? <p className="text-red-500 font-medium">{error.message}</p> : null}
      </div>
    );
  }
);

export default Input;
