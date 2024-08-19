import Title from "../../layout/Title";
import "./Rentyaht.css";
import Carousel from "@/components/UI/Carousel";
import { exscursions } from "@/lib/Excursions";

export default function RentYaht() {
    const data = exscursions.filter((item) => item.category == "yaht");
    return (
        <>
            <Title text='rent_yaht' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
