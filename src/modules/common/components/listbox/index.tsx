import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TriangleDownMini } from "@medusajs/icons"

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

export default function Dropdown({
    title,
    items,
    value,
    handleChange
}: {
    title: string,
    items: Array<any>
    value: any
    handleChange: (value: string) => void
}) {

    return (
        <div className="relative z-40 w-full md:w-auto min-w-[250px]">
            <Listbox value={value} onChange={(e)=>handleChange(e)}>
                <div className="mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-[#E5E5E5] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="">
                            {value.label}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <TriangleDownMini />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {items.map((item, itemIdx) => (
                                <Listbox.Option
                                    key={itemIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-4 pr-4 ${active ? 'bg-[#FF5733] text-white cursor-pointer' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                    {item.label}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
