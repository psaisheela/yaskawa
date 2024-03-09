const InputComp = ({ label, onChange, options, show,  }) => {
    return (
        show && <div className=" grid grid-cols-2" style={{
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            margin: 10
        }}
        >
            <div>
                <label htmlFor={label} style={{
                    width: '50%',
                    alignItems: 'flex-start',

                }}>{label + '\t \t'}</label>
            </div>
            <div>
                <select className=" w-5/6 border" onChange={onChange} defaultValue={options[0]}  >
                    
                    {
                        options.map((item, index) => {
                            return <option  disabled = {index === 0 ? true: false} value={item}>{item}</option>
                        })
                    }


                </select>
            </div>

        </div>
    );
}
export default InputComp; 