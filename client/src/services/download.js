import { baseURL } from "./api";

const endpoint = "download";

const excel = (id, ano) => {
  window.open(`${baseURL}/${endpoint}/ata/excel/${id}/${ano}`);
};

const downloadServices = {
  excel,
};

export default downloadServices;
