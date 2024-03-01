export default function PageWrapper({children}) {

    return (
        <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-start px-6">
            {children}
        </div>
    )

}