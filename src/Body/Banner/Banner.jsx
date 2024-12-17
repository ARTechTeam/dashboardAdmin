export default function Banner() {
  return (
    <div className="p-4 bg-[url(/IMAGE/1.png)] w-full bg-no-repeat bg-cover bg-center max-md:h-40 h-64 flex justify-center items-center flex-col gap-3 shadow">
        <h2 className="text-center text-white font-primary-bold text-3xl max-md:text-xl">
        Wellcome Back, John!!
        </h2>
        <p className="text-white/80 text-center max-md:text-xs">
        Welcome to the viho Family!we are glad that you are visite this dashboard.we will be happy to help you grow your business.
        </p>
        <button className="text-Primary bg-white/80 hover:bg-white rounded-lg px-5 py-2">
            update
        </button>
    </div>
  )
}
