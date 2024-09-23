import bs from '../../assets/bs-removebg-preview.png'
import profil from '../../assets/profil.jpeg'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            {/* menu start */}
            <main className="min-h-screen flex flex-1">
                <div className="bg-gray-900 flex justify-center flex-col w-screen flex-1">
                    <div className='pt-0 font-bold text-3xl text-white flex justify-center'>
                        About Me
                    </div>
                    <div className='flex justify-center'>
                        <div className='flex-1 flex-row items-start pr-14'>
                            <div className="pr-5 pt-16 flex justify-end ">
                                <img
                                    src={profil}
                                    className="rounded-xl w-[30%]" />
                            </div>
                            <div className='pr-5 pt-12 flex-1 flex justify-end font-bold text-2xl text-teal-600'>My Journey</div>


                            <div className='flex flex-row justify-end pt-5'>
                                <div>
                                    <div className='flex'>
                                        <svg className="border rounded-md mr-4 w-12 h-12 p-1 justify-center text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                                            <path fill-rule="evenodd" d="M9.896 3.051a2.681 2.681 0 0 1 4.208 0c.147.186.38.282.615.255a2.681 2.681 0 0 1 2.976 2.975.681.681 0 0 0 .254.615 2.681 2.681 0 0 1 0 4.208.682.682 0 0 0-.254.615 2.681 2.681 0 0 1-2.976 2.976.681.681 0 0 0-.615.254 2.682 2.682 0 0 1-4.208 0 .681.681 0 0 0-.614-.255 2.681 2.681 0 0 1-2.976-2.975.681.681 0 0 0-.255-.615 2.681 2.681 0 0 1 0-4.208.681.681 0 0 0 .255-.615 2.681 2.681 0 0 1 2.976-2.975.681.681 0 0 0 .614-.255ZM12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
                                            <path d="M5.395 15.055 4.07 19a1 1 0 0 0 1.264 1.267l1.95-.65 1.144 1.707A1 1 0 0 0 10.2 21.1l1.12-3.18a4.641 4.641 0 0 1-2.515-1.208 4.667 4.667 0 0 1-3.411-1.656Zm7.269 2.867 1.12 3.177a1 1 0 0 0 1.773.224l1.144-1.707 1.95.65A1 1 0 0 0 19.915 19l-1.32-3.93a4.667 4.667 0 0 1-3.4 1.642 4.643 4.643 0 0 1-2.53 1.21Z" />
                                        </svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='font-bold'> 5 Years Job </div>
                                            <div className=''>Experience</div>
                                        </div>
                                    </div>
                                    <div className='flex mt-2'>
                                        <svg className="border rounded-md mr-4 p-1 h-12 w-12 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='font-bold'> 999+ Projects </div>
                                            <div className=''>Completed</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-10">
                                    <div className='flex'>
                                        <svg className="border rounded-md mr-4 h-12 p-1 w-12 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />  <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />  <polyline points="12 8 7 3 3 7 8 12" />  <line x1="7" y1="8" x2="5.5" y2="9.5" />  <polyline points="16 12 21 17 17 21 12 16" />  <line x1="16" y1="17" x2="14.5" y2="18.5" /></svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='font-bold'> Freelance </div>
                                            <div className=''>Avaiable</div>
                                        </div>
                                    </div>
                                    <div className='flex mt-2'>
                                        <svg className="border rounded-md mr-4 p-2 h-12 w-12 text-gray-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        <div className='flex flex-col justify-center'>
                                            <div className='font-bold'> 24/7 </div>
                                            <div className=''>Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className='pl-0 pt-20 flex-1 space-y-5'>
                            <div className='font-bold text-2xl text-teal-600'>Bobby Sudiharto</div>
                            <div className='font-bold '>Full Stack Developer</div>
                            <div className='pr-36 text-justify'>As a motivated professional transitioning from sales to web development, I bring a strong mix of technical skills and client-focused experience. My sales background has sharpened my problem-solving and communication abilities, enabling me to create user-friendly, responsive websites. Proficient in HTML, CSS, JavaScript, and familiar with modern frameworks, I’m eager to contribute to dynamic teams and deliver effective digital solutions. </div>
                            <button className="btn btn-outline btn-accent">Download CV</button>
                            <div className='flex justify-start font-bold text-2xl text-teal-600 pt-14'>My Interests</div>
                            <div className='flex flex-row gap-12'>
                                <div className='flex justify-center items-center'>
                                    <div><svg className="h-8 w-8 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />  <circle cx="12" cy="13" r="3" /></svg></div>
                                    <div>Photo</div>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <div><svg className="h-8 w-8 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="7" width="18" height="13" rx="2" />  <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <path d="M3 13a20 20 0 0 0 18 0" /></svg></div>
                                    <div>Travel</div>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <div><svg className="h-8 w-8 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" /></svg></div>
                                    <div>Hiking</div>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <div><svg className="h-8 w-8 text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="9" x2="19" y2="9" />  <line x1="5" y1="15" x2="19" y2="15" />  <line x1="11" y1="4" x2="7" y2="20" />  <line x1="17" y1="4" x2="13" y2="20" /></svg></div>
                                    <div>Coding</div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>


            </main>
        </>
    )
}
