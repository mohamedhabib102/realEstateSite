import CustomTitle from "../ui/CustomTitle"
import ServicesGrid from "../ui/ServicesGrid"



const Services: React.FC = () => {
    return (
        <section className="py-16">
            <CustomTitle
             state={false}
             space={false}
             subTitle="Our Services"
             title="Comprehensive Real Estate Solutions"
            />
            <ServicesGrid />
        </section>
    )
}

export default Services