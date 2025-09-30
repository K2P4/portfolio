import { Loader2 } from 'lucide-react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useCreateMutation } from '../store/endpoints/contact';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export const Contact = () => {
  const [CreateFun, { data, isLoading }] = useCreateMutation();

  const initialValues = {
    email: '',
    name: '',
    message: '',
  };

  const handleSubmit = async (value) => {
    console.log(value);
    await CreateFun(value);

    value.email = '';
    value.name = '';
    value.message = '';
  };

  const validationSchema = yup.object({
    email: yup.string().required('email is required').email('invalid email format'),
    name: yup.string().required('name is required'),

    message: yup.string(),
  });
  return (
    <div className="ContainerResponsive flex gap-6 py-16 sm:gap-14 flex-col justify-center">
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        <span className="inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-xs font-semibold text-gray-700">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">I want to hear from you </h2>
      </div>

      <div id="contact" className="flex flex-col gap-6 sm:gap-0 lg:gap-12 sm:flex-row w-full">
        <div  data-aos="fade-right" className={` w-full flex flex-col gap-6 sm:gap-7 `}>
          <div className="flex  items-center gap-8 sm:gap-5">
            <FaMapMarkerAlt className="btn-outline   h-10 w-10 rounded-full  p-2 " />
            <p className="text-gray-700 font-medium text-pretty sm:text-base text-sm cardFont w-full sm:w-[72%] tracking-wide">North Okkalapa Township, Yangon.</p>
          </div>

          <div className="flex items-center gap-7 sm:gap-5">
            <FaPhone className="btn-outline   h-10 w-10 rounded-full  p-2 " />

            <p className="text-gray-700 font-medium cardFont w-full text-md sm:text-base sm:w-[72%] tracking-wider sm:tracking-wide">+95 9968213232</p>
          </div>

          <div className="flex items-center gap-7 sm:gap-5">
            <SiGmail className="btn-outline   h-10 w-10 rounded-full  p-2 " />

            <p className="text-gray-700 font-medium sm:text-base text-md tracking-wider sm:tracking-wide cardFont w-full sm:w-[72%]">pthuya381@gmail.com</p>
          </div>
        </div>

        <div data-aos="fade-left" className={` w-full   `}>
          <Formik validateOnChange={false} validateOnBlur={false} validationSchema={validationSchema} initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
              <>
                {data && <div className="mb-3 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-black text-sm">Thanks for reaching out — I’ll get back to you shortly.</div>}
                <Form className="flex flex-col gap-4 rounded-2xl  ">
                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className=" px-5 py-3 sm:px-3 sm:p-4 rounded-xl w-full focus:outline-none bg-white border border-primary/50 focus:border-primary text-sm text-black placeholder:text-black/50 focus:ring-1 focus:ring-primary/40"
                      name="name"
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      aria-invalid={touched?.name && errors?.name ? 'true' : 'false'}
                    />
                  </div>

                  <div>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="mt-1 border border-primary/50 px-5 py-3 sm:px-3 sm:p-4 rounded-xl w-full focus:outline-none bg-white focus:border-primary text-sm text-black placeholder:text-black/50 focus:ring-1 focus:ring-primary/40"
                      name="email"
                      type="email"
                      id="email"
                      required
                      placeholder="Your email"
                      aria-invalid={touched?.email && errors?.email ? 'true' : 'false'}
                    />
                  </div>

                  <div>
                    <textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className="mt-1 border border-primary/50 px-5 py-3 rounded-xl text-black placeholder:text-black/50 w-full focus:outline-none min-h-[100px] bg-white focus:border-primary focus:ring-1 focus:ring-primary/40 text-sm"
                      name="message"
                      id="message"
                      placeholder="Type your message here..."
                      aria-invalid={touched?.message && errors?.message ? 'true' : 'false'}
                    />
                  </div>

                  <button disabled={isSubmitting} type="submit" className="xs:mr-auto md:ml-auto w-fit rounded-xl  sm:mt-5  mt-3    btn-primary  px-6 py-3 focus:outline-none focus:ring-1 focus:ring-primary/40">
                    {isLoading ? <Loader2 className="mr-2 text-white mx-auto text-center h-5 w-5 animate-spin" /> : <> Submit</>}
                  </button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

