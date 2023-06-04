import React from 'react'
import { Container } from 'react-bootstrap';
import TableList from '../Component/TableList';

function SeatingChart() {

    return (
        <Container fluid className='seatingChartSection'>
            <TableList />
        </Container>
    )
}
export default SeatingChart