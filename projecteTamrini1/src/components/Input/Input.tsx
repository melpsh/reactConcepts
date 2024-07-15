import { IInput } from "./type";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
}: IInput) => {
  return (
    <>
      <div className="flex flex-col">
        <label>{placeholder}: </label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="p-2 border rounded"
        />
      </div>
    </>
  );
};

export default Input;
