import Button from '@modules/common/components/button/index';

const AboutUs = () => {

    return (
        <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-12 md:col-span-6 xl:px-[150px]">
                <img className="h-full" src="/img/Team.jpeg" />
            </div>
            <div className="col-span-12 md:col-span-6 md:px-[50px] text-center">
                <p className="mt-5">TEAM EHFConcept</p>
                <h2 className="mt-6 text-2xl font-bold">Una marca por deportistas para deportistas</h2>
                <p className="mt-5">Desde nuestra fundacion en el 2023, nosotros hemos buscado la forma de potencionar los beneficios del ejercicios a traves de Inteligencias artificiales.</p>
                <p className="mt-5"><strong>Nuestra misión</strong>: sadasd</p>
                <Button className="mt-5">Leer más sobre EHFConcept</Button>
            </div>           
        </div>
    )
}

export default AboutUs;