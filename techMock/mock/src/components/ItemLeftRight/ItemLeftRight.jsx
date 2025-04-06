// Build a component that allows transferring of items between two lists.

/* Requirements
There are two lists each initially containing 4 items.

Each item has a checkbox that can be checked/unchecked.

Transferring
  Clicking on the double arrow buttons will transfer all items from one list to the other, as specified by the direction of the arrows.

  Clicking on the single arrow buttons will transfer only the selected items, as specified by the direction of the arrows.

  Transferred items are added to the bottom of the destination list.

  Item selection (checked) states are preserved after transferring.

  Buttons are disabled if there are no relevant items to be transferred.
*/
import React, { useState } from 'react';

const initialList1 = [
  { id: 1, label: 'HTML', checked: false },
  { id: 2, label: 'JavaScript', checked: false },
  { id: 3, label: 'CSS', checked: false },
  { id: 4, label: 'TypeScript', checked: false },
];

const initialList2 = [
  { id: 5, label: 'React', checked: false },
  { id: 6, label: 'Angular', checked: false },
  { id: 7, label: 'Vue', checked: false },
  { id: 8, label: 'Svelte', checked: false },
];

const TransferList = () => {
  const [list1, setList1] = useState(initialList1);
  const [list2, setList2] = useState(initialList2);

  const handleToggle = (list, setList, id) => {
    setList(
      list.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const transferItems = (
    sourceList,
    destList,
    setSourceList,
    setDestList,
    transferCheckedOnly
  ) => {
    const itemsToTransfer = transferCheckedOnly
      ? sourceList.filter(item => item.checked)
      : sourceList;

    if (itemsToTransfer.length === 0) return;

    setDestList([...destList, ...itemsToTransfer]);
    setSourceList(
      transferCheckedOnly
        ? sourceList.filter(item => !item.checked)
        : []
    );
  };

  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-2">List 1</h3>
        {list1.map(item => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(list1, setList1, item.id)}
              />
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <button
          className="p-1 border"
          onClick={() => transferItems(list1, list2, setList1, setList2, true)}
          disabled={!list1.some(item => item.checked)}
        >
          &gt;
        </button>
        <button
          className="p-1 border"
          onClick={() => transferItems(list1, list2, setList1, setList2, false)}
          disabled={list1.length === 0}
        >
          &gt;&gt;
        </button>
        <button
          className="p-1 border"
          onClick={() => transferItems(list2, list1, setList2, setList1, false)}
          disabled={list2.length === 0}
        >
          &lt;&lt;
        </button>
        <button
          className="p-1 border"
          onClick={() => transferItems(list2, list1, setList2, setList1, true)}
          disabled={!list2.some(item => item.checked)}
        >
          &lt;
        </button>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-2">List 2</h3>
        {list2.map(item => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleToggle(list2, setList2, item.id)}
              />
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransferList;
