function ErrorPage(props){

    return (
        <div className="h-[100vh] flex justify-center items-start bg-gray-100">
            <div className="text-left pt-24">
                <h3 className="text-[#374151] text-6xl font-bold pb-10">Uppsss... 404</h3>
                <p className="font-bold text-[#374151] text-2xl pb-4">{props.error}</p>
                <p className="text-[#374151] text-[20px] pb-10">Check if the search term is correct. If you think this is an error, <br /> contact support <b>Thanks!</b></p>
                <a onClick={()=> location.reload()} className="btn btn-error">Reload</a>
            </div>
        </div>
    )
}

export default ErrorPage;