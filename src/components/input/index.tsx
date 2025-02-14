import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    type: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: string;
}

const Input = <T extends FieldValues>({ name, type, placeholder, register, error }: InputProps<T>) => {
    return (
        <div className="transition-all">
            <input
                className="w-full border-2 rounded-md h-11 px-2 shadow-md shadow-green-200/50"
                type={type}
                placeholder={placeholder}
                {...register(name)}
                id={String(name)}
            />

            {!error && (
                <p className="opacity-0 text-sm transition-all">sem erro</p>
            )}

            {error ? <p className="text-green-600 text-sm transition-all">{error}</p> : <p className="opacity-0 text-sm transition-all">{error}</p>}
        </div>
    );
};

export default Input;