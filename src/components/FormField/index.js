import React from "react";

function FormField({label, type, name, valor, onChange }) {

    return (
        <div>
            <label>
                {label}: 
          <input
                    type={type}
                    name={name}
                    value={valor}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default FormField