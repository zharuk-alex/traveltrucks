import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { useEffect, useMemo } from "react";
import { selectFilters } from "store/filters/selectors";
import {
  selectVehicleEquipList,
  selectVehicleFormsList,
} from "store/campers/selectors";
import css from "./Filters.module.css";
import FiltersGroup from "components/FiltersGroup/FiltersGroup";
import { Btn, TextField } from "components/UI";
import { selectLoading } from "store/campers/selectors";

const Filters = ({ onSubmit }) => {
  const filters = useSelector(selectFilters);
  const equipFilters = selectVehicleEquipList;
  const formFilters = selectVehicleFormsList;
  const isLoading = useSelector(selectLoading);

  const formFiltersModifyed = useMemo(
    () => formFilters?.map((field) => ({ ...field, single: true })),
    [formFilters]
  );

  const handleSubmit = (values) => {
    const filteredValues = {};
    for (const key in values) {
      if (!!values[key]) {
        filteredValues[key] = values[key];
      }
    }

    onSubmit(filteredValues);
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ location: "", ...filters }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <TextField
            id={"location"}
            name={"location"}
            type={"text"}
            label={"Location"}
            clearable={true}
            placeholder={"City"}
            appendIcon={"icon-map"}
          />
          <div className={css.filtersSet}>
            <p className={css.title}>Filters</p>
            <FiltersGroup
              type="multiple"
              title={"Vehicle equipment"}
              items={equipFilters}
            />
            <FiltersGroup
              type="single"
              title={"Vehicle type"}
              items={formFiltersModifyed}
            />
          </div>
          <Btn type="submit" loading={isLoading} className={css.btn}>
            Search
          </Btn>
        </Form>
      </Formik>
    </div>
  );
};

export default Filters;
