import React from 'react'
import Header from '../header/Header'

function Main() {
    return (
        <div>
        <Header/>
        <main className='w-full bg-gray-900'>
            <section className='m-auto xl:container px-6 pt-10'>
                <div className='flex flex-col lg:flex-row lg:justify-between xl:justify-between'>
                    <div className=' '>
                        <h2 className='text-base xl:text-2xl text-[#FFC978]'>
                            OUR PROJECT
                        </h2>
                        <h1 className='text-3xl xl:text-3xl text-white font-bold xl:mt-2'>Our Latest Projects</h1>
                    </div>
                    <nav className='flex cursor-pointer text-[#ABAEB7] justify-between lg:gap-2 xl:gap-6 xl:text-base  mt-8 mb-11 text-base md:text-xl flex-wrap'>
                        <li className='text-[#FFC978] underline'>All</li>
                        <li className='hover:text-[#FFC978] hover:underline'>Architecture</li>
                        <li className='hover:text-[#FFC978] hover:underline'>Construction</li>
                        <li className='hover:text-[#FFC978] hover:underline'>Interior Design</li>
                    </nav>
                </div>
                <div className='flex flex-wrap gap-2 xl:gap-2 justify-center xl:mt-20'>
                    <div className='w-[45%] flex flex-col gap-2 xl:gap-3 xl:w-auto'>
                        <img className='w-[100%] xl:w-[300px]  object-contain' src="./imgs/main/Rectangle 725.png" alt="" />
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 754.png" alt="" />
                    </div>
                    <div className='w-[45%] xl:gap-3 xl:w-auto flex flex-col gap-2 mt-7'>
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 755.png" alt="" />
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 756.png" alt="" />
                    </div>
                    <div className='w-[45%] xl:gap-3 xl:w-auto  flex-col gap-2 mt-0 hidden xl:flex'>
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 755.png" alt="" />
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 756.png" alt="" />
                    </div>
                    <div className='w-[45%] xl:gap-3 xl:w-auto  flex-col gap-2 mt-7 hidden xl:flex'>
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 755.png" alt="" />
                        <img className='w-[100%] xl:w-[300px] object-contain' src="./imgs/main/Rectangle 756.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='bg-[#23262F] w-full pt-7 mt-10 px-6 pb-7 xl:p-16 '>
                <div className='xl:container m-auto xl:flex xl:px-7'>
                    <div className='xl:flex xl:flex-row-reverse xl:gap-[122px]'>
                        <div className='xl:flex xl:flex-col xl:items-start'>
                            <h1 className='text-3xl font-bold  text-white'>We Create Digital Experience</h1>
                            <div className='flex justify-center gap-6 mt-10'>
                                <span className='text-4xl text-[#ffc978] flex flex-col gap-2' >75% <p className='text-base text-[#dfe9eb]'>Architecture</p> </span>
                                <span className='text-4xl text-[#ffc978] flex flex-col gap-2' >75% <p className='text-base text-[#dfe9eb]'>Architecture</p></span>
                                <span className='text-4xl text-[#ffc978] flex flex-col gap-2' >75% <p className='text-base text-[#dfe9eb]'>Architecture</p></span>
                            </div>
                            <button className='p-4 px-7 mt-8 text-base text-white border mb-4'>Lets work together</button>
                        </div>
                        <div className='flex justify-center'>
                            <img className='object-contain' src="./imgs/main/Group 11770.png" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <section className='xl:container m-auto bg-gray-900 mt-6 px-6 xl:flex items-center xl:justify-center xl:gap-[51px]'>
                <div>
                    <h2 className='text-base text-[#FFC978]'>
                        OUR PROJECT
                    </h2>
                    <h1 className='text-3xl text-white font-bold'>Check Availability</h1>
                    <div class="flex mt-7 items-center justify-center text-white">
                        <div class="p-6 overflow-scroll xl:overflow-auto px-0">
                            <table class="w-full min-w-max table-auto text-left">
                                <thead>
                                    <tr>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Transaction</p>
                                        </th>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Amount</p>
                                        </th>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
                                        </th>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Status</p>
                                        </th>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Account</p>
                                        </th>
                                        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Spotify</p>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$2,500</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 3:00pm</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="w-max">
                                                <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                                                    <span class="">paid</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">visa
                                                    </p>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <img src="https://docs.material-tailwind.com/img/logos/logo-amazon.svg" alt="Amazon" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Amazon</p>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$5,000</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 1:00pm</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="w-max">
                                                <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md" >
                                                    <span class="">paid</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png" alt="master-card" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">master card
                                                    </p>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <img src="https://docs.material-tailwind.com/img/logos/logo-pinterest.svg" alt="Pinterest" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Pinterest</p>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$3,400</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Mon 7:40pm</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="w-max">
                                                <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-amber-500/20 text-amber-900 py-1 px-2 text-xs rounded-md">
                                                    <span class="">pending</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png" alt="master-card" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">master card
                                                    </p>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <img src="https://docs.material-tailwind.com/img/logos/logo-google.svg" alt="Google" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Google</p>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$1,000</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 5:00pm</p>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="w-max">
                                                <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                                                    <span class="">paid</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">visa
                                                    </p>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4 border-b border-blue-gray-50">
                                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="p-4">
                                            <div class="flex items-center gap-3">
                                                <img src="https://docs.material-tailwind.com/img/logos/logo-netflix.svg" alt="netflix" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                                                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">netflix</p>
                                            </div>
                                        </td>
                                        <td class="p-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">$14,000</p>
                                        </td>
                                        <td class="p-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">Wed 3:30am</p>
                                        </td>
                                        <td class="p-4">
                                            <div class="w-max">
                                                <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-md" >
                                                    <span class="">cancelled</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1" />
                                                </div>
                                                <div class="flex flex-col">
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">visa

                                                    </p>
                                                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="p-4">
                                            <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                                <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4">
                                                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="w-full pt-5 px-4 mb-8 mx-auto ">
                                {/* <div class="text-sm text-gray-700 py-1">
                                    Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='hidden xl:flex xl:flex-col xl:items-center xl:gap-4'>
                    <p className='text-white w-[440px]'>The unique architect with ideas from outside the world. Where design and science meet. With people’s comfort in mind</p>
                    <img src="./imgs/main/Rectangle 731.png" alt="" />
                </div>
            </section>
        </main>
        </div>
    )
}

export default Main