import Title from "../../layout/Title";
import "./Individual.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";

export default function Individual() {
    const tags = ["individual"];
    const data = filterByTags(tags);

    return (
        <>
            <Title text='individual' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
