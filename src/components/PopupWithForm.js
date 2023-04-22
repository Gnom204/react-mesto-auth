function PopupWithForm({ isOpen, isClose, name, title, btnText, children, onSubmit }) {
    return (
        <div className={`popup ${name}-popup ${((isOpen) ? 'popup_is-open' : '')}`}>
            <div className="popup__container">
                <button className="popup__close" onClick={isClose}></button>
                <h2 className="popup__heading">{title}</h2>
                <form onSubmit={onSubmit} name={`popup__${name}forms`} className="popup__forms">
                    {children}
                    <button className={`popup__save-button popup__${name}-btn`}>{btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm