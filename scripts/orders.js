import { loadProductsFetch } from '../data/products.js';
import { renderOrdersGrid } from "./orders/ordersGrid.js";
import { renderOrdersHeader } from "./orders/orderHeader.js";


async function loadPage() {
    try{
        await loadProductsFetch();
    } catch (error) {
        console.log(error);
    }

    renderOrdersHeader();
    renderOrdersGrid();
}

loadPage();