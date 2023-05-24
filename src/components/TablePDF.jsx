/* eslint-disable react/prop-types */
import * as XLSX from "xlsx"
const TablePDF = ({ municipios }) =>
{
    const generateExcel = () =>
    {
        // Crea una nueva instancia de Workbook
        const workbook = XLSX.utils.book_new();

        // Crea un array para almacenar los datos de la tabla
        const data = [];

        // Agrega la cabecera de la tabla al array de datos
        const header = ['Municipio', 'Hospitales', 'Bares', 'Clínicas', 'Restaurantes', 'Farmacias'];
        data.push(header);

        // Agrega los datos de cada fila al array de datos
        municipios.forEach((muni) =>
        {
            const row = [muni.municipio, muni.giros[0].visitas, muni.giros[1].visitas, muni.giros[2].visitas, muni.giros[4].visitas, muni.giros[3].visitas];
            data.push(row);
        });

        // Crea una nueva hoja en el workbook y asigna los datos
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');

        // Genera el archivo Excel y descárgalo
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveAsExcelFile(excelBuffer, 'reporte.xlsx');
    };

    // Función auxiliar para descargar el archivo Excel
    const saveAsExcelFile = (buffer, fileName) =>
    {
        const data = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        if (navigator.msSaveBlob)
        {
            // Para IE y Edge
            navigator.msSaveBlob(data, fileName);
        } else
        {
            // Para otros navegadores
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(data);
            link.download = fileName;
            link.click();
        }
    };

    return (
        <button
            type="button"
            className="text-sm bg-pink-800 p-3 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-pink-900 transition-colors mt-5"
            onClick={generateExcel}
        >Descargar Excel</button>
    )
}

export default TablePDF