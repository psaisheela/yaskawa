const Header = ()=>{
    return (
        <div className=" flex flex-col justify-center h-20 border border-b-2 ">
            <div className = " flex flex-row justify-start mx-10 ">
                <img src={require('./../assets/images/logo.png')} alt="logo" width={200} height={100} />
            </div>

        </div>
    )
}

export default Header; 