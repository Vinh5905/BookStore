import logoWhite from '../../../../assets/logo/logoWhite.svg'
import messenger from '../../../../assets/icon/socials/messWhite.svg'
import linkein from '../../../../assets/icon/socials/inWhite.svg'
import twitter from '../../../../assets/icon/socials/twitterWhite.svg'

const socials = [
    {
        name: "Messenger",
        link: '#',
        svgCode: messenger,
    },
    {
        name: "Linkedin",
        link: '#',
        svgCode: linkein,
    },
    {
        name: "Youtube",
        link: '#',
        svgCode: twitter,
    },
]

const company = [
    {
        name: "Home",
        link: "#",
    },
    {
        name: "About us",
        link: "#",
    },
    {
        name: "Books",
        link: "#",
    },
    {
        name: "New release",
        link: "#",
    },
    {
        name: "Contact us",
        link: "#",
    },
    {
        name: "Blog",
        link: "#",
    }
]

const important_link = [
    {
        name: "Privacy Policy",
        link: '#',
    },
    {
        name: "FAQs",
        link: '#',
    },
    {
        name: "Terms of Service",
        link: '#',
    }
]

function Footer() {
    return (
        <div className="w-full bg-[--primary-color] text-white py-14 px-28">
            <div className="w-full h-full inline-grid grid-cols-12">
                <div className="col-start-1 col-end-6 pr-20">
                    <div className='w-24'>
                        <img src={logoWhite} alt="" />
                    </div>
                    <p className='mt-10 mb-6 font-extralight italic'>Books are the treasured wealth of the world and the fit inheritance of generations and nations. <br/> We provide all kinds of books you need.</p>
                    <div className='flex gap-5'>
                        {socials.map((social, index) => <SocialSize key={index} srcSvg={social.svgCode} link={social.link}/>)}  
                    </div>
                </div>
                <div className="col-start-6 col-end-9 uppercase">
                    <OtherInfo fieldName="Company">{company}</OtherInfo>
                </div>
                <div className="col-start-9 col-end-13">
                    <OtherInfo fieldName="Important Links">{important_link}</OtherInfo>
                </div>

            </div>
            <div className="flex justify-between mt-14 text-sm">
                <span className='italic'>&copy; 2024 Team 3. All right Reserved</span>
                <span className='font-bold'>Privacy | Terms of Service</span>
            </div>
        </div>
    )
}

function SocialSize( {srcSvg, link} ) {
    return (
        <a href={link} className='h-10 w-10 block'>
            <img src={srcSvg} alt="" />
        </a>
    )
}

function OtherInfo( {children, fieldName} ) {
    return (
        <div className='w-full'>
            <p className='uppercase pl-4 text-xl mb-6 font-medium'>{fieldName}</p>
            <ul>
                {children.map((info, index) => {
                    return (
                        <li>
                            <a href={info.link} className='inline-block px-4 py-1.5'>{info.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Footer;