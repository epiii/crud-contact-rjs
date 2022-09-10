import React from 'react'
import tw from "tailwind-styled-components"

function UserCard(props) {
    const {
        id,
        fullName,
        email,
        address,
        phone,
        password
    } = props

    const ContainerCard = tw.div`
        flex
        flex-col-reverse
        justify-center
        items-center
        bg-yellow-300
        mx-2
        my-2
    `
    const TabUL = tw.ul` 
        flex
        justify-center
        items-center
        my-4
        bg-pink-400
    `
    const TabLI = tw.li`
        bg-green-400
        cursor-pointer
        py-2
        px-4
        mx-1
        text-gray-500
        border-b-8
    `
    // ${(p) => (p.$primary ? "active:text-white" : "hover:text-black")}
    const ContentWrap = tw.div` 
        w-80
        bg-white
        p-16
        text-center
        mx-auto
        border
    `
    const Contentx = tw.div`
        bg-red-500
    `

    return (
        <ContainerCard>
            <TabUL>
                <TabLI>
                    tab1
                </TabLI>
                <TabLI>
                    tab2
                </TabLI>
                <TabLI>
                    tab3
                </TabLI>
            </TabUL>

            <ContentWrap>
                <Contentx>contentx 1</Contentx>
                <Contentx>contentx 2</Contentx>
                <Contentx>contentx 3</Contentx>
            </ContentWrap>
            <br />
            {/* {fullName}
            {email} */}
        </ContainerCard>
    )
}

export default UserCard