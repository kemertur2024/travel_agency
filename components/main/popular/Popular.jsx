import Title from "../../layout/Title";
import "./Popular.css";
import Carousel from "@/components/UI/Carousel";
import { filterByTags } from "@/helpers/helpers";

export default function Popular() {
    const tags = ["popular"];
    const data = filterByTags(tags);

    return (
        <>
            <Title text='popular' />

            <section>
                <div className='wrapper'>
                    <Carousel data={data} />
                </div>
            </section>
        </>
    );
}
