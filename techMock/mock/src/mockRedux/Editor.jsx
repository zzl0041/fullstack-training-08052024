import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

const Editor = ({ onUpdate, item }) => {
    const attributes = useSelector((state) => state.editor.attributes);
    const [values, setValues] = useState({});
    useEffect(() => {
        if(item){
            const init = {};
            Object.keys(attributes).forEach((key) => {
                init[key] = item[key] || "";
            });
            setValues(init);    
        }
    }, [item, attributes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => {
            const newValues = {...prev, [name]: value};
            if(item){
                onUpdate(item.id, { [name]: value });
            }
            return newValues;
        });
    };
    if(!item) return <div>No item selected</div>;
    return (
        <div> 
            <h2>Edit Item: {item.id}</h2>
            {Object.entries(attributes).map(([key, attr]) => (
                <div key={key}>
                    <label>{attr.name} ({attr.dataType})</label>
                    <input 
                        type="text" 
                        name={key} 
                        value={values[key]} 
                        onChange={handleChange} 
                    />
                </div>
            ))}
        </div>
    )
}

export default Editor;