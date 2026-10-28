import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2';

const ContactForm = ({
  inputs = [],
  formClassName = "comment-one__form",
  inputClassName = "comment-form__input-box",
  messageClassName = "text-message-box",
  btnBoxClassName = "btn-box",
  btnClassName = "comment-form__btn",
  btnText = "Send a message",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    // console.log(data);
    setIsLoading(true);
    const url = 'https://api.mastaenterprisebd.com/api/emailsend';
    const targetUrl = `${url}?fullname=${data.name}&email=${data.email}&phone=${data.phone}&subject=${data.subject}&message=${data.message}`;
    axios.post(targetUrl)
      .then((response) => {
        setIsLoading(false);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'success',
          text: 'We will get back to you shortly.',
          showConfirmButton: false,
          timer: 5000
        })
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${formClassName} contact-form-validated`}
    >
      <Row>
        {inputs.map(({ name, placeholder, type, required }) => (
          <Col key={name} xl={6}>
            <div className={inputClassName}>
              <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                {...register(name, { required })}
              />
              {required && errors[name] && (
                <label htmlFor={name} className="error">
                  This field is required.
                </label>
              )}
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xl={12}>
          <div className={`${inputClassName} ${messageClassName}`}>
            <textarea
              name="message"
              placeholder="Write a Message"
              {...register("message")}
            ></textarea>
          </div>
          <div className={btnBoxClassName}>
            <button type="submit" className={`thm-btn ${btnClassName}`}>
            {isLoading ? 'Sending...' : btnText}
              {/* {btnText} */}
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
