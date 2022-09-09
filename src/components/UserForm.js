import React from 'react'
import tw from "tailwind-styled-components"

const Button = tw.div`
    ${(p) => (p.$primary ? "bg-indigo-600" : "bg-white")}
    ${(p) => (p.$primary ? "text-white" : "text-black")}
    ${(p) => (p.$primary ? "hover:bg-indigo-900" : "hover:bg-gray-200")}
    ${(p) => (p.$primary ? "hover:text-white" : "hover:text-black")}
    ${(p) => (p.$primary ? "hover:text-white" : "hover:text-black")}

    flex
    inline-flex
    text-sm
    items-center
    my-1
    mx-1
    py-2
    px-2
    font-bold
    border-1
    border-transparent
    rounded
    shadow-sm
    
    cursor-pointer
    focus:outline-none
`

const Form = tw.form`
    flex-col
    justify-start
    item-start
    fled
`

const InputRow = tw.div`
    my-7
`

const Label = tw.p`
    block
    font-semibold
    text-sm 
    text-left
`

const FormHeader = tw.p`
    font-semibold
    text-md 
    text-left
`

const SubHeader = tw.p`
    text-sm
    text-gray-400 
    text-left
`

const Input = tw.input`
    appearance-none 
    border 
    rounded-md 
    w-full 
    py-2 
    px-3 
    text-gray-500 
    leading-tight 
    text-sm
    focus:outline-none 
    focus:shadow-outline
`

const UserForm = () => {
    const initialUserState = {
        id: "",
        fullName: "",
        email: "",
        address: "",
        phone: "",
        password: "",
    };

    return (
        <Form>
            <FormHeader>
                Personal information
            </FormHeader>
            <SubHeader>
                This information will be displayed publicly so be careful what you share.
            </SubHeader>

            <InputRow >
                <Label for="fullname">
                    Full Name
                </Label>
                <Input placeholder="Your Name" />
            </InputRow>
            <InputRow >
                <Label for="fullname">
                    Email Address
                </Label>
                <Input placeholder="yourmail@mail.com" />
            </InputRow>
            <InputRow >
                <Label for="fullname">
                    Date of Birth
                </Label>
                <Input placeholder="dd/mm/yy" />
            </InputRow>
            <InputRow >
                <Label for="fullname">
                    Address
                </Label>
                <Input placeholder="Street Address" />
            </InputRow>
            <InputRow >
                <Label for="fullname">
                    Phone Number
                </Label>
                <Input placeholder="e.g 813 84938 8989" />
            </InputRow>
            <InputRow >
                <Label for="password">
                    Password
                </Label>
                <Input placeholder="*******" />
            </InputRow>

            <div className='flex '>
                <Button $primary={false}>
                    Cancel
                </Button>
                <Button $primary>
                    Submit
                </Button>
                <Button $primary={false} >
                    Auto Generate
                </Button>
            </div>
        </Form>
    )
}

export default UserForm