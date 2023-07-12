import { configureStore } from "@reduxjs/toolkit";
import branchsSlice from "./features/branchsSlice";
import plansSlice from "./features/plansSlice";
import myBranchSlice from "./features/myBranchSlice";
import inboxSlice from "./features/inboxSlice";
import getPackageSlice from "./features/getPackageSlice";
import searchPackagesSlice from "./features/searchPackagesSlice";
import editPriceSlice from "./features/editPriceSlice";
import saveItemsSlice from "./features/saveItemsSlice";
import uploadInvoiceSlice from "./features/uploadInvoiceSlice";
import returnPackageSlice from "./features/returnPackageSlice";
import settingsSlice from "./features/settingsSlice";
import outboxSlice from "./features/outboxSlice";


const store = configureStore({
    reducer: {
        branchs: branchsSlice,
        plans: plansSlice,
        myBranch: myBranchSlice,
        inbox: inboxSlice,
        package: getPackageSlice,
        searchPackages: searchPackagesSlice,
        updatePrice: editPriceSlice,
        saveItems: saveItemsSlice,
        uploadInvoice: uploadInvoiceSlice,
        returnPackage: returnPackageSlice,
        settings: settingsSlice,
        outbox: outboxSlice,

    }
});

export default store;