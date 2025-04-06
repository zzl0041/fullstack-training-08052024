import React, {useState} from 'react'
const TreeView = ({data})=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = (hasChild, id) => {
        if(hasChild){
            setIsOpen({...isOpen, [id]:!isOpen[id]});
        }
        //setIsOpen(!isOpen);
    }
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>
                    <div onClick={()=> toggleOpen(item.children,item.id)}
                    className={item.children ? "caret" : ""}>
                        {item.name}
                    </div>
                    {item.children && isOpen && (
                        <TreeView data={item.children}/>
                    )}
                </li>
            ))}
        </ul>
    );
}
