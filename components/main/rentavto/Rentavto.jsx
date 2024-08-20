import Title from "../../layout/Title";
import "./Rentavto.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";

export default function RentAvto() {
    const tags = ["rent_avto"];
    const data = filterByTags(tags);

    return (
        <>
            <Title text='rent_avto' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
