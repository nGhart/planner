import React from 'react'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'

const checklist = [
    {
        id: 1,
        heading: "CEREMONY",
        content: "Lorem ipsum "
    },
    {
        id: 2,
        heading: "CEREMONY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 3,
        heading: "CEREMONY",
        content: "Lorem ipsum dolor"
    },
    {
        id: 4,
        heading: "CEREMONY",
        content: "Lorem ipsum "
    },
    {
        id: 5,
        heading: "CLOTHING",
        content: "Lorem ipsum "
    },
    {
        id: 6,
        heading: "CLOTHING",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 7,
        heading: "CLOTHING",
        content: "Lorem ipsum "
    }, {
        id: 8,
        heading: "CLOTHING",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 9,
        heading: "CLOTHING",
        content: "Lorem ipsum "
    },
    {
        id: 10,
        heading: "CLOTHING",
        content: "Lorem ipsum dolor"
    },
    {
        id: 11,
        heading: "CLOTHING",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 12,
        heading: "CLOTHING",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 13,
        heading: "PHOTOGRAPHY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 14,
        heading: "PHOTOGRAPHY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 15,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 16,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 17,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 18,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 19,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 20,
        heading: "STATIONERY",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 21,
        heading: "FLOWERS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 22,
        heading: "FLOWERS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 23,
        heading: "FLOWERS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 24,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 25,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 26,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 27,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 34,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 35,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 36,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 37,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 38,
        heading: "RECEPTION",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 41,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 42,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 43,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 44,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 45,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 46,
        heading: "FOOD",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 47,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 48,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 49,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 50,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 51,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 52,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 53,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
    {
        id: 54,
        heading: "DRINKS",
        content: "Lorem ipsum dolor sit"
    },
];

const Check = () => {

    const checkCategories = checklist.reduce((headings, item) => {
        const { heading } = item;
        if (!headings[heading]) {
            headings[heading] = [];
        }
        headings[heading].push(item);
        return headings;
    }, {});

    const [check, checkBox] = useState(true);
    function checkItem(id) {
        checkBox({
            ...check, [id]: !check[id],
        })
    }
    return (
        <Row className='checklistItem'>
            {Object.entries(checkCategories).map(([heading, items]) => (
                <Col xs={3} key={heading}>
                    <h6>{heading}</h6>
                    <div className='list'>
                        {items.map(item => (
                            <div key={item.id} onClick={() => checkItem(item.id)}>
                                <span className='checked'>
                                    { <span style={{ visibility: check[item.id] ? "visible" : "hidden" }}>✔</span> }
                                </span>
                                <span key={item.id}>{item.content}</span>
                            </div>
                        ))}
                    </div>
                </Col>
            ))
            }
        </Row >
    )
}

export default Check