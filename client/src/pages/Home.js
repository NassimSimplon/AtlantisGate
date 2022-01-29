import React from 'react'
import Apropo from '../component/Apropo'
import Cours from '../component/Cours'
import Formatrise from '../component/Formatrise'
import DescriptionSection from '../component/DescriptionSection'
const Home = () => {
    return (
        <div>
            <DescriptionSection />
            <Apropo />
            <Formatrise />
            <Cours />
            <br /><br />

        </div>
    )
}

export default Home
