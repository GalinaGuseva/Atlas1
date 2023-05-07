import React from "react";
import { Link } from 'react-router-dom';
import  './PopupWithForm.css';
import { useForm } from "../../hooks/UseForm.js";

export default function PopupWithForm({ isOpen, onClose, onSubmit }) {
  const initValues = { nameInput: "", jobInput: "", emailInput: "", phoneInput: "" };
  const { values, setValues, handleChange } = useForm(initValues);

  function handleSubmit(e) {
    e.preventDefault();
      onSubmit({
        userName: values.nameInput,
        job: values.jobInput,
        email: values.emailInput,
        phone: values.phoneInput,
    });
    setValues(values);
  }

  return isOpen ? (
    <div
      className={`popup form-popup ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <form        
        className="popup__container"
        onSubmit={handleSubmit}
        onClick={(e) => {
          e.stopPropagation();
        }}
        noValidate
      >
        <button
          type="button"
          className="popup__btn-close"
          title="Закрыть"
          onClick={onClose}
        ></button>
        <h4 className="popup__title">Заявка на подключение</h4>
        <input
        type="text"
        placeholder="Ваше имя"
        className="popup__field popup__field_top"
        name="userName"
        id="name-input"
        value={values.nameInput}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Название организации"
        className="popup__field"
        name="userJob"
        id="job-input"
        value={values.jobInput}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="E-mail(для уведомлений)"
        className="popup__field"
        name="email"
        id="email-input"
        value={values.emailInput}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Номер телефона"
        className="popup__field"
        name="userPhone"
        id="phone-input"
        value={values.phoneInput}
        onChange={handleChange}
        required
      />
        <button
          type="submit"
          className="popup__btn-submit"
          title="Send"
        >Отправить заявку</button>
         <div className="popup__field_thin">
            <input 
              type="checkbox" 
              className="popup__check" />
            <span className='popup__thin'>Соглашаюсь с <Link to="/policy" className='popup__btn'>условиями передачи данных</Link></span>
          </div>           
      </form>
    </div>
  ) : null;
}