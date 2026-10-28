import React, { Component } from 'react';

function TableBody({ items, columns }) {
    return (
        <tbody>
            {
                items.map(item => (
                    <tr key = { item.path } >
                        {
                            columns.map(column => (
                                column.content(item, column.path)
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    );
}
 
export default TableBody;