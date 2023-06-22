import React from 'react'
import GoBackButton from '../../../../components/blocks/goBackButton'
import InputGroup from '@/components/elements/input'
import TextareaGroup from '@/components/elements/textarea'


const FormSection = () => {
    return (
        <section className="relative bg-white">
            <div className="container px-4 md:px-8 xl:px-4 mx-auto pt-14 md:pt-16 lg:pt-20 pb-32 lg:pb-40 relative">
                <div className="">
                    <GoBackButton />
                </div>

                <div className="mt-8 lg:mt-12 w-full">
                    <h3 className="text-primary font-extrabold text-2xl lg:text-3xl xl:text-4xl">
                        Get Started Now
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
                        </div>

                        <div className="mt-6">
                            <TextareaGroup
                                name='reason'
                                label='Tell us your reasons'
                                rows={12}
                            />
                        </div>

                        <div className="mt-12 flex flex-col-reverse md:flex-row justify-end md:space-x-4 lg:space-x-6">
                            <button
                                type="button"
                                className="mb-6 py-4 px-8 lg:px-12 rounded-[9px] bg-[#F0F0F0] text-default font-bold text-sm-15 md:text-base focus:outline-none"
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                className="mb-6 py-4 px-8 lg:px-10 rounded-[9px] bg-primary text-white font-bold text-sm-15 md:text-base focus:outline-none"
                            >
                                Request Access
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormSection