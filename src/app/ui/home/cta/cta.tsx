export default function Component() {
    return (
            <div className="bg-slate-100 text-center p-3 w-3/5 m-auto rounded-lg flex items-baseline justify-around">
                <div className="text-md">
                    ¿Querés saber más? Agendá una llamada con nosotros
                </div>
                <button type="button" className="ml-5 text-sm border p-3 bg-green-600 hover:bg-green-500 transition rounded-md text-white hover:shadow-lg">
                    Agendar
                </button>
            </div>
    )
}