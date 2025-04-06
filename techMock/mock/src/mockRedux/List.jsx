import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateItem } from "../actions/editorActions";
import Editor from "./Editor";

const List = () => {
const items = useSelector((state) => state.editor.items);
const dispatch = useDispatch();

const handleUpdateItem = (id, updates) => {
    dispatch(updateItem(id, updates));
}

const [selectedItem, setSelectedItem] = useState("");


    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => setSelectedItem(item)}>
                        {item.id}
                    </li>
                ))}
            </ul>
            <Editor onUpdate={handleUpdateItem} item={selectedItem} />
            <button onClick={() => alert(JSON.stringify(items, null, 4))}>
                Submit
            </button>
        </div>
    );
}

export default List;