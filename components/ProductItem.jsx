import cl from "./ProductItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { dollar } from "@/lib/constants/constants";

export default function ProductItem({ child }) {
    return (
        <>
            <Link
                key={child.id}
                href={`/catalog/${child.id}`}
                className={cl.item}
                rel='noopener noreferrer'
                // target='_blank'
            >
                <div className={cl.img_wrapper}>
                    <Image
                        src={
                            child?.images[0]
                                ? child?.images[0]
                                : "/images/default_product.png"
                        }
                        alt={child.name}
                        width={854}
                        height={480}
                        priority
                    />
                </div>
                <div className={cl.bottom}>
                    <h3 className={cl.bottom_title}>{child.name}</h3>
                    <div className={cl.bottom_price}>
                        {child.oldprice ? (
                            <span className={cl.oldprice}>
                                {child.oldprice}
                                {dollar}
                            </span>
                        ) : (
                            ""
                        )}

                        <span className={cl.price}>
                            {child.price}
                            {dollar}
                        </span>
                    </div>
                </div>
                <div className={cl.label}>{child.label}</div>
            </Link>
        </>
    );
}
