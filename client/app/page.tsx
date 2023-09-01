"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";
import {
  vehiclesState,
  getVehicles,
  sendVehicles,
} from "@/app/features/vehicles/vehiclesSlice";
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as yup from "yup";

interface Values {
  brand: string;
  model: string;
  badge: string;
}

export default function Home() {
  const dispatch = useAppDispatch();
  const { vehicles, isLoading, uploads } = useAppSelector(vehiclesState);
  const brands = Object.keys(vehicles);
  const [uploadText, setUploadText] = useState("");

  let models = [];
  const modelsValue = {};

  console.log(uploads);

  for (const key in vehicles) {
    const modelskey = Object.keys(vehicles[key]);
    models.push(...modelskey);
    Object.assign(modelsValue, vehicles[key]);
  }

  const badges = Object.values(modelsValue).flat() as [];

  const initialValues: Values = {
    brand: "",
    model: "",
    badge: "",
  };

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch]);

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setTimeout(() => {
      const data = {
        details: values,
        uploaded: uploadText,
      };

      dispatch(sendVehicles(data));

      setSubmitting(false);
    }, 500);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-5 py-20 lg:p-24">
      <h2 className="text-xl uppercase mb-4">Select A Vehicle</h2>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <Formik
          enctype="multipart/form-data"
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            brand: yup
              .string()
              .oneOf(brands, "Invalid Cars")
              .required("Required"),

            model: yup
              .string()
              .oneOf(models, "Invalid Models")
              .required("Required"),
            badge: yup
              .string()
              .oneOf(badges, "Invalid Models")
              .required("Required"),
          })}
          onSubmit={onSubmit}
        >
          {({ errors, values, touched, setFieldValue, isSubmitting }) => (
            <>
              <Form className="w-full max-w-md">
                <div className="mb-5">
                  <Field
                    component="select"
                    id="brand"
                    name="brand"
                    className="cbg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Make</option>
                    {brands.map((carbrand) => (
                      <option value={carbrand} key={carbrand}>
                        {carbrand}
                      </option>
                    ))}
                  </Field>
                  {errors.brand && touched.brand && (
                    <p className="text-red-500 text-xs italic mt-3">
                      {errors.brand}
                    </p>
                  )}
                </div>

                {values?.brand && (
                  <div className="mb-5">
                    <Field
                      component="select"
                      id="model"
                      name="model"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="">Model</option>
                      {Object.keys(vehicles[values.brand]).map((modelItem) => (
                        <option value={modelItem} key={modelItem}>
                          {modelItem}
                        </option>
                      ))}
                    </Field>
                    {errors.model && touched.model && (
                      <p className="text-red-500 text-xs italic mt-3">
                        {errors.model}
                      </p>
                    )}
                  </div>
                )}

                {vehicles[values.brand] &&
                  vehicles[values.brand][values.model] && (
                    <div className="mb-5">
                      <Field
                        component="select"
                        id="badge"
                        name="badge"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orage-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">Badge</option>

                        {vehicles[values?.brand][values?.model].map(
                          (badgeItem: string) => (
                            <option value={badgeItem} key={badgeItem}>
                              {badgeItem}
                            </option>
                          )
                        )}
                      </Field>
                      {errors.badge && touched.badge && (
                        <p className="text-red-500 text-xs italic mt-3">
                          {errors.badge}
                        </p>
                      )}
                    </div>
                  )}

                {vehicles[values.brand] &&
                  vehicles[values.brand][values.model] &&
                  values?.badge && (
                    <div className="w-full">
                      <input
                        id="file"
                        name="file"
                        type="file"
                        onChange={(event: any) => {
                          event.preventDefault();

                          const reader = new FileReader();

                          reader.onload = async (e: any) => {
                            const text = e.target.result;

                            setUploadText(text);
                          };

                          reader.readAsText(event.currentTarget.files[0]);
                        }}
                      />
                    </div>
                  )}

                <button
                  disabled={isSubmitting}
                  className="mt-10 inline-block rounded bg-orange-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]  disabled:opacity-10"
                  type="submit"
                >
                  {isSubmitting ? "Loading" : "Submit"}
                </button>
              </Form>

              <hr className="bg-white w-full max-w-md my-10" />
              <div className="w-full max-w-md ">
                <h2 className="text-xl uppercase mb-4">Autofilled Vehicle</h2>
                <div className="flex gap-2">
                  <button
                    className="inline-block rounded bg-black dark:bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white dark:text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      setFieldValue("brand", "tesla");
                      setFieldValue("model", "Model 3");
                      setFieldValue("badge", "Performance");
                    }}
                  >
                    Tesla Model 3 Performance
                  </button>

                  <button
                    className="inline-block rounded bg-black dark:bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white dark:text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => {
                      setFieldValue("brand", "bmw");
                      setFieldValue("model", "130d");
                      setFieldValue("badge", "xDrive 26d");
                    }}
                  >
                    BMW 130d xDrive 26d
                  </button>
                </div>
              </div>
            </>
          )}
        </Formik>
      )}
      {!isLoading && uploads && (
        <div className="w-full max-w-md mt-10">
          <hr className="bg-white w-full max-w-md my-10" />
          <h3 className="text-lg mb-5">Details Submitted</h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  mb-5">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Brand
                  </th>
                  <td>{uploads?.details.brand}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Model
                  </th>
                  <td>{uploads?.details.model}</td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Badge
                  </th>
                  <td>{uploads?.details.badge}</td>
                </tr>
              </tbody>
            </table>

            {uploads.uploaded.split("\n").map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
