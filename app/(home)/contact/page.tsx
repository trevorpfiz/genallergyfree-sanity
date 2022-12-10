import ScrollUp from '#/components/ScrollUp';
import ContactForm from 'app/(home)/contact/ContactForm';

export default function Contact() {
  return (
    <>
      <ScrollUp />
      <section className="bg-oldyellow">
        <ContactForm />
      </section>
    </>
  );
}
