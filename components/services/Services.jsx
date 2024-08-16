import { ServicesList } from "@/lib/ServicesList";
import "./Services.css";
import ServiceItem from "./ServiceItem";

export default function Services() {
    const list = ServicesList;

    return (
        <>
            Services
            <section>
                <div className='wrapper'>
                    {list.map((item) => (
                        <ServiceItem item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </>
    );
}
