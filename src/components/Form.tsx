import IconUpload from '../assets/img/icon-upload.svg'
import IconInfo from '../assets/img/icon-info.svg'
import BgFooter from '../assets/img/pattern-squiggly-line-bottom-mobile-tablet.svg'
import navIcon from '../assets/img/logo-full.svg'
import githubIcon from '../assets/img/icon-github.svg'
import TicketInfo from '../assets/img/pattern-ticket.svg'
import FieldForm from './FieldForm'
import { useRef, useState } from 'react'
import type { Data, Empty } from '../types/conference'
import NavBar from './NavBar'
import Hero from './Hero'


const Form = () => {

    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [showContent, setShowContent] = useState(false)

    const [dataUser, setDataUser] = useState<Data>({
        nameUser: '',
        emailUser: '',
        githubUser: ''
    })

    const [empty, setEmpty] = useState<Empty>({
        emptyNameUser: false,
        emptyEmailUser: false,
        emptyGithubUser: false
    })

    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        const previewUrl = URL.createObjectURL(file)
        setPreviewUrl(previewUrl)
    }
    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        setPreviewUrl(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleChangeImg = (e: React.MouseEvent) => {
        e.stopPropagation()
        fileInputRef.current?.click()
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value })
    }

    const validarInput = ({ nameUser, emailUser, githubUser }: Data) => ({
        emptyNameUser: nameUser.trim() === '',
        emptyEmailUser: emailUser.trim() === '',
        emptyGithubUser: githubUser.trim() === ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isEmpty = validarInput(dataUser)
        setEmpty(isEmpty)
        if (Object.values(isEmpty).includes(true) || !previewUrl) {
            return
        }
        setShowContent(true)
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <div className='flex-1 flex flex-col'>
                <Hero isHidden={showContent} nameUser={dataUser.nameUser} emailUser={dataUser.emailUser} />

                {showContent ?
                    <div className='px-4 flex-1 flex flex-col relative'>
                        <img
                            src={TicketInfo}
                            alt=""
                            className='absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-auto object-contain pointer-events-none'
                        />
                        <div className='flex flex-col relative h-full w-[80%] justify-center gap-6 p-5'>
                            <div className='w-full '>
                                <img src={navIcon} alt="" className=''/>
                                <p className='text-white ml-12'>Jan 31, 2025 / Austin, TX </p>
                            </div>
                            <div className='flex items-center gap-3.5'>
                                <img src={previewUrl ? previewUrl : ''} alt="" className='w-16 h-16 bg-[#332f54] border-2 border-[#433d64] rounded-xl object-cover' />
                                <div>
                                    <h2 className='text-white'>{dataUser.nameUser}</h2>
                                    <div className='flex'>
                                        <img src={githubIcon} alt="" />
                                        <p className='text-white'>{dataUser.githubUser}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={BgFooter} alt="" className='absolute bottom-0 left-0' />
                    </div>
                    :
                    <form action="" className='flex flex-col justify-center relative pb-34 z-0' onSubmit={handleSubmit}>
                        <div className='px-4'>
                            <label className='text-white text-2xl'>Upload Avatar</label>
                            <div className='bg-[#1b163e] border-2 border-white border-dashed flex flex-col items-center p-6 space-y-6 rounded-2xl my-4 cursor-pointer' onClick={previewUrl ? undefined : handleClick}>
                                <img src={previewUrl ? previewUrl : IconUpload} alt="" className='w-16 h-16 bg-[#332f54] border-2 border-[#433d64] rounded-2xl object-cover' />
                                {previewUrl ?
                                    (
                                        <div className='flex gap-3'>
                                            <button type='button' className='text-white text-xs bg-[#322e4f] px-3 py-1 rounded-md' onClick={handleRemove}>Remove image</button>
                                            <button type='button' className='text-white text-xs bg-[#322e4f] px-3 py-1 rounded-md' onClick={handleChangeImg}>Change image</button>
                                        </div>
                                    )
                                    :
                                    (
                                        <p className='text-white'>Drag and drop or click to upload</p>
                                    )
                                }
                            </div>
                            <input type="file" ref={fileInputRef} accept='image/png, image/jpeg' onChange={handleFileChange} className='hidden' />
                            <div className='flex gap-2'>
                                <img src={IconInfo} alt="" />
                                <span className='text-white inline text-xs'> Upload your photo (JPG or PNG, max size: 500KB).</span>
                            </div>

                            <FieldForm fieldname={'Full Name'} placeholder={''} name={'nameUser'} handleInput={handleInput} />
                            <FieldForm fieldname={'Email Address'} placeholder={'example@email.com'} name={'emailUser'} handleInput={handleInput} />
                            <FieldForm fieldname={'GitHub Username'} placeholder={'@yourusername'} name={'githubUser'} handleInput={handleInput} />
                            <button className='bg-[#f67464] h-14 font-bold w-full rounded-2xl text-2xl'>Generate My Ticket</button>
                        </div>
                        <img src={BgFooter} alt="" className='absolute bottom-0 left-0 -z-10' />
                    </form>
                }
            </div>
        </div>
    )
}

export default Form