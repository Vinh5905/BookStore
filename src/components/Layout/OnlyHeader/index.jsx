import Header from '../components/Header/header'

export default function OnlyHeader( {children} ) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    )
}