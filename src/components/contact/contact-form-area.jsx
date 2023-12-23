import Image from "next/image";
import ContactForm from "../forms/contact-form";

import address_icon from "@assets/img/icon/c-icon.png";
import email_icon from "@assets/img/icon/c-icon.png";
import phone_icon from "@assets/img/icon/c-icon.png";

const contact_content = {
  title: "Tell us about your project requirement!",
  contact_title: "Get In Touch",
  contact_des:
    "You have a really good idea, we're sure of it. Let's have a fantastic conversion so we can implement your concept sooner!    ",

  contact_info: [
    {
      id: 1,
      img: address_icon,
      title: "Office Address",
      sm_info: (
        <>
          405, 4th floor, Industry House, AB Rd, Near Industry House, Old
          Palasia, Indore, Madhya Pradesh 452001
        </>
      ),
    },
    {
      id: 2,
      img: email_icon,
      title: "Email",
      sm_info: <a href="mailto:info@ghartaktech.com">info@ghartaktech.com</a>,
    },
    {
      id: 3,
      img: phone_icon,
      title: "Phone",
      sm_info: <a href="tel:93293 84316">+91 93293 84316</a>,
    },
  ],
};
const { title, sub_title, contact_des, contact_title, contact_info } =
  contact_content;

const ContactFormArea = () => {
  return (
    <>
      <div className="contact-form-area pt-60 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 offset-lg-1 offset-xl-2">
              <div className="section-title-2 text-center mb-70">
                <h2 className="mb-20">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-5 offset-xl-1">
              <div className="contact-info mb-30">
                <h3>{contact_title}</h3>
                <p>{contact_des}</p>

                <ul className="mt-40">
                  {contact_info?.map((item, i) => (
                    <li key={i}>
                      <div className="c-info-icon">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                      <div className="c-info-text">
                        <h4>{item.title}</h4>
                        <p>{item.sm_info}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="contact-form mb-30">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormArea;
