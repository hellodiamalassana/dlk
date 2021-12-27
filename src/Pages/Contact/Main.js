import React from "react";
import "./style.css";
import { useGlobalContext } from "../../Components/state/useContext";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { StyledSectionTitle } from "../AboutMe/styled-components";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";

function Contact() {
  const { pageVariants, pageTransitions } = useGlobalContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <motion.div
      exit="off"
      animate="on"
      initial="off"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <StyledSectionTitle>
        <h1>Contact Me</h1>
        <hr />
      </StyledSectionTitle>
      <div className="contact-header">
        <form
          onSubmit={() => handleSubmit(onSubmit)}
          method="POST"
          action="https://formsubmit.co/lautaroef@gmail.com"
        >
          <div className="inputBox">
            <h2>
              Your Name <small>{errors?.name?.message}</small>
            </h2>
            <input
              type="text"
              {...register("name", {
                required: "*",
                minLength: {
                  value: 2,
                  message: "Invalid length, at least 2 words",
                },
              })}
              placeholder="Name"
            />
          </div>
          <div className="inputBox">
            <h2>
              Your Email <small>{errors?.email?.message}</small>
            </h2>
            <input
              type="text"
              {...register("email", {
                required: "*",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email",
                },
              })}
              placeholder="Email"
            />
          </div>
          <div className="inputBox">
            <h2>
              Your Message
              <small> {errors?.message?.message}</small>
            </h2>
            <textarea
              {...register("message", { required: "*" })}
              placeholder="Message"
            />
          </div>
          <div className="inputBox">
            <input type="submit" value="Send" />
          </div>
        </form>
        <div className="fast-contact">
          <ImPhone />
          <a href="tel:54387 5380900">+54387 5380900</a>
          <HiMail /> <p>lautaroef@gmail.com</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
