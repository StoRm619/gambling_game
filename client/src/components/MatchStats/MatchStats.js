import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import { Table } from 'reactstrap';

function MatchStats(props) {

    return (
<Table hover>
    <thead>
        <tr>
            <th>Teams</th>
            <th>Stat 1</th>
            <th>Stat 2</th>
            <th>Stat 3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Team A</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">Team B</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</Table>
    )}

export default MatchStats;