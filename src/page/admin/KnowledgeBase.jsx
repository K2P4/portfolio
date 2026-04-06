import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useUploadKnowledgeMutation } from '../../store/endpoints/chatbot';
import { FaCloudUploadAlt, FaPlusCircle } from 'react-icons/fa';
import Alert from '../../components/Alert';
import { knowledgeSchema } from '../../validations/knowledgeSchema';

const KnowledgeBase = () => {
  const [upload, { isLoading, error, isSuccess, isError }] = useUploadKnowledgeMutation();
  const [fileName, setFileName] = useState('');

  const initialValues = {
    textContent: '',
    file: null,
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await upload({ file: values.file, textContent: values.textContent }).unwrap();
      resetForm();
      setFileName('');
    } catch (error) {
      console.error('Integration error:', error);
    }
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-night text-white flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700/50">
          {isError && <Alert variant="error" message={error?.message || 'Failed to upload knowledge base.'} className="mb-8 overflow-hidden" />}

          {isSuccess && <Alert variant="success" message="New knowledge successfully integrated!" className="mb-8" />}

          <Formik initialValues={initialValues} validationSchema={knowledgeSchema} onSubmit={handleSubmit}>
            {({ setFieldValue, handleChange, handleBlur, values, errors, touched }) => (
              <Form className="space-y-6">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <FaPlusCircle className="text-blue-500" /> Training Text Data
                  </label>
                  <textarea
                    name="textContent"
                    className="w-full p-4 bg-slate-900/50 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 min-h-[160px] transition-all resize-none text-sm"
                    placeholder="Describe facts, company info, or FAQs..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.textContent}
                  />
                  {touched.textContent && errors.textContent && <span className="text-xs text-red-400">{errors.textContent}</span>}
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <FaCloudUploadAlt className="text-blue-500" /> PDF Document
                  </label>
                  <label className="relative flex flex-col items-center justify-center w-full min-h-[120px] border-2 border-dashed border-slate-700 hover:border-blue-500/50 rounded-xl cursor-pointer bg-slate-900/30 transition-all hover:bg-slate-900/50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <FaCloudUploadAlt size={28} className="mb-3 text-slate-500" />
                      <p className="mb-1 text-sm text-slate-400">
                        <span className="font-semibold text-blue-500">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-slate-500">Only PDF files supported</p>
                      {fileName && <p className="mt-3 text-xs font-semibold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Selected: {fileName}</p>}
                    </div>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue('file', file);
                        setFileName(file ? file.name : '');
                      }}
                    />
                  </label>
                  {touched.file && errors.file && <span className="text-xs text-red-400">{errors.file}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-xl font-semibold shadow-md transition-all flex justify-center items-center gap-3 uppercase tracking-wider text-sm mt-4"
                >
                  {isLoading ? 'Training System...' : 'Integrate Knowledge'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
