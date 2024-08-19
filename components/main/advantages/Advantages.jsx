import Title from "../../layout/Title";
import "./Advantages.css";
import Advantages_item from "./Advantages_item";
import { advantages } from "@/lib/Advantages";

export default function Advantages() {
    return (
        <>
            <Title text='advantages' />

            <section>
                <div className='container'>
                    {advantages.map((item) => (
                        <Advantages_item item={item} key={item.id} />
                    ))}
                </div>
            </section>
        </>
    );
}
