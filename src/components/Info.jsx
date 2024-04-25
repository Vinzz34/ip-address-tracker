/* eslint-disable react/prop-types */

const Info = ({data}) => {

    if(data){
        return (
            <div className="relative flex flex-col lg:flex-row lg:w-fit mx-auto px-4 lg:px-8 py-6 lg:py-9 gap-y-6 lg:gap-x-[60px] lg:divide-x divide-darkGray z-[1000] lg:text-left bg-white rounded-xl shadow-2xl">
                <div className="space-y-1 lg:space-y-2">
                    <h3 className="text-xs text-darkGray font-bold tracking-widest">IP ADDRESS</h3>
                    <h2 className="text-xl lg:text-2xl font-medium break-words">{data.ip}</h2>
                </div>
                <div className="space-y-1 lg:space-y-2 lg:pl-8">
                    <h3 className="text-xs text-darkGray font-bold tracking-widest">LOCATION</h3>
                    <h2 className="text-xl lg:text-2xl font-medium break-words">{`${data.location.city}, ${data.location.country} ${data.location.postalCode}`}</h2>
                </div>
                <div className="space-y-1 lg:space-y-2 lg:pl-8">
                    <h3 className="text-xs text-darkGray font-bold tracking-widest">TIMEZONE</h3>
                    <h2 className="text-xl lg:text-2xl font-medium break-words">{`UTC ${data.location.timezone}`}</h2>
                </div>
                <div className="space-y-1 lg:space-y-2 lg:pl-8">
                    <h3 className="text-xs text-darkGray font-bold tracking-widest">ISP</h3>
                    <h2 className="text-xl lg:text-2xl font-medium break-words">{data.isp}</h2>
                </div>
            </div>
        )
    }
}

export default Info