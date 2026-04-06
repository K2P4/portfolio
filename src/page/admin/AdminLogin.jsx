import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useLoginMutation } from '../../store/endpoints/auth';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert';
import { authSchema } from '../../validations/authSchema';

import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../store/slices/authSlice';

const AdminLogin = () => {
  const [login, { isLoading, error, isError }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    const result = await login(values);
    if (!result.error) {
      dispatch(setAuth({ email: values.email }));
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-night text-white p-4">
      <div className="p-8 bg-slate-800 rounded-2xl shadow-xl w-full max-w-md border border-slate-700/50">
        <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Admin Portal</h2>

        {isError && <Alert variant="error" message={error?.message || 'Login failed. Please try again.'} className="mb-6" />}

        <Formik initialValues={initialValues} validationSchema={authSchema} onSubmit={handleSubmit}>
          {({ handleChange, handleBlur, values, errors, touched }) => (
            <Form className="space-y-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    touched.email && errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                  }`}
                  placeholder="admin@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && <span className="text-xs text-red-400 ml-1">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-300 ml-1">Password</label>
                <input
                  type="password"
                  name="password"
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    touched.password && errors.password ? 'border-red-500/50 focus:ring-red-500/20' : 'border-slate-700 focus:border-blue-500/50 focus:ring-blue-500/20'
                  }`}
                  placeholder="••••••••"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && <span className="text-xs text-red-400 ml-1">{errors.password}</span>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all flex justify-center items-center gap-2 mt-2"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
