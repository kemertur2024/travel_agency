// import "./myModal.css";

// export default function MyModal({ isOpen, toggleOpen, children }) {
//     return (
//         <div className={`overlay ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
//             <div className='modal'>{children}</div>
//         </div>
//     );
// }

import cl from "./MyCustomModal.module.css";

export default function MyCustomModal({ isOpen, toggleOpen, children }) {
    // Функция для предотвращения закрытия модалки при клике внутри
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={toggleOpen}
            className={`${cl.overlay}  ${isOpen ? cl.open : ""}`}
        >
            <div className='modal' onClick={handleModalClick}>
                {children}
            </div>
        </div>
    );
}
