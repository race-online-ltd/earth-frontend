import React, { Component } from 'react';
import TableHeader from './Table.header';
import TableBody from './Table.body';
import './CustomTable.css'

/*
    1. Stateless functional component : when we know that no state is needed.
*/

function Table(props) {
    const { items, columns } = props;

    return (
        <div class="table-responsive">
            <table className="table table-hover" style={{width: '100%'}}>
                <TableHeader columns={columns} />
                <TableBody items={items} columns={columns} />
            </table>
        </div>
    );
}
 
export default Table;