const initialState = {
    // id is uniq
    items: [
      {
        id: "id1",
        supplierId: "supplierId1",
        unitCost: 1,
        supplierStockID: "stockId1",
        sendTraitCodes: "sendTraitCodes1",
        omitTraitCodes: "omitTraitCodes1",
      },
      {
        id: "id2",
        supplierId: "supplierId2",
        unitCost: 2,
        supplierStockID: "stockId2",
        sendTraitCodes: "sendTraitCodes2",
        omitTraitCodes: "omitTraitCodes2",
      },
    ],
    //
    attributes: {
    //   supplierId: {
    //     key: "supplierId",
    //     name: "9-Digit Supplier Id",
    //     requirementLevel: "Required",
    //     dataType: "String",
    //   },
      unitCost: {
        key: "unitCost",
        name: "Unit Cost",
        requirementLevel: "Required",
        dataType: "Decimal",
      },
      supplierStockID: {
        key: "supplierStockID",
        name: "Supplier Stock Number",
        requirementLevel: "Recommended",
        dataType: "String",
      },
      sendTraitCodes: {
        key: "sendTraitCodes",
        name: "Send Traits",
        requirementLevel: "Recommended",
        dataType: "String",
      },
      omitTraitCodes: {
        key: "omitTraitCodes",
        name: "Omit Traits",
        requirementLevel: "Required",
        dataType: "String",
      },
    },
  };

const editorReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM': {
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, ...action.payload.updates };
                    }
                    return item;
                }),
            }
        }
        default:
            return state;
    }
}

export default editorReducers;