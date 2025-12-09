type HeroProps = {
    isHidden: boolean
    nameUser: string
    emailUser: string
}

const Hero = ({ isHidden , nameUser , emailUser}: HeroProps) => {
    return (
        <div className="space-y-8 my-8 px-4">
            {isHidden ? (
                <>
                    <h2 className='text-white text-3xl font-bold text-center'>{`Congrats, ${nameUser} ! Your ticket is ready.`}</h2>
                    <p className='text-white text-xl text-center'>{`We've emailed your ticket to ${emailUser} correo and will send updates in the run up to the event.`}</p>
                </>
            )
            :
            (
                <>
                    <h2 className='text-white text-3xl font-bold text-center'>Your Journey to Coding Conf 2025 Starts Here!</h2>
                    <p className='text-white text-xl text-center'>Secure your spot at next year's biggest coding conference.</p>  
                </>
            )
            }
        </div>
    )
}

export default Hero