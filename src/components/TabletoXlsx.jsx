import React, { Component } from 'react'
import './TabletoXlsx.css'
import * as XLSX from 'xlsx'


export class TabletoXlsx extends Component {
    constructor(props) {
        super(props);
        this.handleDownload = this.handleDownload.bind(this);
    }

    handleDownload() {
        const { data, columns, filename } = this.props;
        const worksheet = XLSX.utils.json_to_sheet(data, { header : columns });
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, `${filename}.xlsx`);
    }

  render() {

    const { data, columns, filename } = this.props;

    return (
      <div>
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}> {columns.map((column, columnIndex) => (
                        <td key={`${rowIndex}-${columnIndex}`}> {row[column]} </td>
                    ))} </tr>
                ))}
            </tbody>
        </table>
        <button onClick={this.handleDownload}>Download Excel file</button>
      </div>

    )
  }
}

export default TabletoXlsx