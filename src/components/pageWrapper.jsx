export default function PageWrapper({children}) {

    return (
        <div className="w-full h-screen bg-slate-50 relative flex flex-col items-center justify-between px-6 py-6">
            {children}
        </div>
    )

}