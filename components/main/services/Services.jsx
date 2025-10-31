import { ServicesList } from "@/lib/ServicesList";
import "./Services.css";
import ServiceItem from "./ServiceItem";
import Title from "../../layout/Title";

export default function Services({ locale }) {
    const list = ServicesList;

    return (
        <>
            <Title text='services' />
            <section>
                <div className='services_wrapper'>
                    {list.map((item) => (
                        <ServiceItem
                            item={item}
                            key={item.id}
                            locale={locale}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
