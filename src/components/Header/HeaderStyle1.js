import React from 'react'
import TopHeader from './TopHeader'
import Navbar from '../Navbar/Navbar'

const HeaderStyle1 = ({topHeaderStyle, navbarStyle}) => {
    return (
        <>
            <TopHeader topHeaderStyle={topHeaderStyle} />
            <Navbar navbarStyle={navbarStyle} />
        </>
    )
}

export default HeaderStyle1
