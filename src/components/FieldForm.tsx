type FieldFormProps = {
    fieldname: string,
    placeholder: string,
    name:string,
    handleInput: (e : React.ChangeEvent<HTMLInputElement>) => void
}

const FieldForm = ({ fieldname,placeholder,name,handleInput}: FieldFormProps) => {
    return (
        <div className="flex flex-col gap-2 my-5">
            <label htmlFor={name} className="text-white text-2xl">{fieldname}</label>
            <input type="text" className="bg-[#1a1639] border border-[#8a86ab] rounded-2xl h-14 placeholder:text-white px-3 text-lg text-white" onChange={handleInput} name={name} placeholder={placeholder}/>
        </div>
    )
}

export default FieldForm