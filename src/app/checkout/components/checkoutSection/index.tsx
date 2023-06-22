import React from 'react'
import GoBackButton from '../../../../components/blocks/goBackButton'
import InputGroup from '@/components/elements/input'
import SelectGroup from '@/components/elements/select'

type ChargeListItemProps = {
    name: string;
    value: string;
    isTotal?: boolean;
}

const ChargeListItem = ({
    name,
    value,
    isTotal = false
}: ChargeListItemProps) => {
    return <div className={`flex justify-between text-sm-15 md:text-base text-textColor mb-4 ${isTotal ? "font-semibold" : ""}`}>
        <p>{name}</p>
        <p className='text-right'>{value}</p>
    </div>
}


const CheckoutSection = () => {
    return (
        <section className="relative bg-white">
            <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-14 md:pt-16 lg:pt-20 pb-32 lg:pb-40 relative">
                <div className="">
                    <GoBackButton />
                </div>

                <div className="mt-8 lg:mt-12 w-full">
                    <h3 className="text-primary font-extrabold text-2xl lg:text-3xl xl:text-4xl">
                        Customer Details
                    </h3>

                    <form>
                        <div className="mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 xl:gap-x-12 gap-y-4 md:gap-y-6">
                            <InputGroup
                                name='fullName'
                                type='text'
                                label='Full Name'
                            />
                            <InputGroup
                                name='companyName'
                                type='text'
                                label='Company Name'
                            />
                            <InputGroup
                                name='industry'
                                type='text'
                                label='Company Industry'
                                placeholder='e.g Telecommunication, IT Service'
                            />
                            <InputGroup
                                name='companySize'
                                type='text'
                                label='Company Size'
                                placeholder='0 - 20'
                            />
                            <InputGroup
                                name='address'
                                type='text'
                                label='Billing Address'
                            />
                            <InputGroup
                                name='email'
                                type='email'
                                label='Company Email Address'
                                placeholder='example@mail.com'
                            />

                            <SelectGroup
                                label='Plan'
                                name='plan'
                                options={[{
                                    label: "STANDARD",
                                    value: "STANDARD"
                                },
                                {
                                    label: "EXTENDED",
                                    value: "EXTENDED"
                                }]}
                            />
                            <SelectGroup
                                label='Payment Plan'
                                name='payment'
                                options={[{
                                    label: "Monthly",
                                    value: "Monthly"
                                },
                                {
                                    label: "Yearly",
                                    value: "Yearly"
                                }]}
                            />
                        </div>

                        <div className="mt-6 grid grid-col-1 md:grid-cols-2">
                            <div className=''>
                                <div className='bg-primary py-3 px-4 text-base lg:text-lg font-semibold text-white'>
                                    Charge summary
                                </div>
                                <div className='mt-1 bg-[#E9F0FD] px-4 pt-4 pb-4'>
                                    <ChargeListItem
                                        name='Subtotal'
                                        value='$30.00'
                                    />
                                    <ChargeListItem
                                        name='Tax'
                                        value='$30.00'
                                    />
                                    <ChargeListItem
                                        name='Plan'
                                        value='Standard'
                                    />
                                    <ChargeListItem
                                        isTotal
                                        name='Total'
                                        value='$40.00'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col-reverse md:flex-row justify-end md:space-x-4 lg:space-x-6">
                            {/* <button
                                type="button"
                                className="mb-6 py-4 px-8 lg:px-12 rounded-[9px] bg-[#F0F0F0] text-default font-bold text-sm-15 md:text-base focus:outline-none"
                            >
                                Clear
                            </button> */}
                            <button
                                type="button"
                                className="mb-6 py-4 px-8 lg:px-10 rounded-[9px] bg-primary text-white font-bold text-sm-15 md:text-base focus:outline-none"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CheckoutSection