import logoMain from '../../../assets/logo/logoMain.svg'

export default function Auth( {children} ) {
    return (
        <div className="relative min-h-screen w-full grid place-items-center">
            <div className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10 blur-sm" style={{backgroundImage:'url(https://i.imgur.com/NnrhIyI.jpg)'}}></div>
            <div className="grid grid-cols-2 max-w-4xl rounded-2xl overflow-hidden shadow-xl shadow-orange-100">
                <img src="https://i.imgur.com/H0JlFJB.jpg" alt=""/>
                <div className="h-full flex px-16 py-12 bg-white">
                    <div className="w-full flex flex-col justify-between items-center">
                        <img src={logoMain} alt="" className="cover bg-no-repeat bg-left-bottom w-24 h-auto" />
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    )
}