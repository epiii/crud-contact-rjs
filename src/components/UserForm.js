import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tw from "tailwind-styled-components"
import { submit } from '../features/user/userSlice'

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
    const [userData, setUserData] = useState(initialUserState)
    const dispatch = useDispatch()

    const onInputChange = (e) => {
        const { name, value } = e.target;
        console.log('onchange', name, value)

        setUserData({
            ...userData,
            [name]: value
        });
    };

    const onSubmitForm = () => {
        dispatch(submit(userData))
    }

    return (
        <>
            {JSON.stringify(userData, '\t', 2)}
            <Form onSubmit={onSubmitForm}>
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
                    <Input
                        name="fullName"
                        onChange={onInputChange}
                        placeholder="Your Name"
                    />
                </InputRow>
                <InputRow >
                    <Label for="fullname">
                        Email Address
                    </Label>
                    <Input
                        name="email"
                        onChange={onInputChange}
                        placeholder="yourmail@mail.com"
                    />
                </InputRow>
                <InputRow >
                    <Label for="dob">
                        Date of Birth
                    </Label>
                    <Input
                        name="dob"
                        onChange={onInputChange}
                        placeholder="dd/mm/yy"
                    />
                </InputRow>
                <InputRow >
                    <Label for="address">
                        Address
                    </Label>
                    <Input
                        name="address"
                        onChange={onInputChange}
                        placeholder="Street Address"
                    />
                </InputRow>
                <InputRow >
                    <Label for="phone">
                        Phone Number
                    </Label>
                    <Input
                        name="phone"
                        onChange={onInputChange}
                        placeholder="e.g 813 84938 8989"
                    />
                </InputRow>
                <InputRow >
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        type="password"
                        name="password"
                        onChange={onInputChange}
                        placeholder="*******"
                    />
                </InputRow>

                <div className='flex '>
                    <Button $primary={false}>
                        Cancel
                    </Button>
                    <Button
                        onClick={onSubmitForm}
                        type="submit"
                        $primary
                    >
                        Submit
                    </Button>
                    <Button $primary={false} >
                        Auto Generate
                    </Button>
                </div>
            </Form>
        </>

    )
}

export default UserForm