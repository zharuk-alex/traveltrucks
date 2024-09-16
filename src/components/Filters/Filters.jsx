import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { selectFilters } from "store/filters/selectors";
import { setFilter } from "store/filters/slice";
import { setPagination } from "store/pagination/slice";
import {
  selectVehicleEquipList,
  selectVehicleFormsList,
} from "store/campers/selectors";
import css from "./Filters.module.css";
import FiltersGroup from "components/FiltersGroup/FiltersGroup";
import { Btn, TextField } from "components/UI";

const Filters = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = useSelector(selectFilters);
  const equipFilters = selectVehicleEquipList;
  const formFilters = selectVehicleFormsList;

  const formFiltersModifyed = useMemo(
    () => formFilters?.map((field) => ({ ...field, single: true })),
    [formFilters]
  );

  const initialFilters = useMemo(() => {
    const params = { location: "" };
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams, filters]);

  const handleSubmit = (values) => {
    const filteredValues = {};
    for (const key in values) {
      if (!!values[key]) {
        filteredValues[key] = values[key];
      }
    }
    dispatch(
      setPagination({
        page: 1,
      })
    );
    setSearchParams(filteredValues);
  };

  useEffect(() => {
    const searchObj = Object.fromEntries(searchParams.entries());
    dispatch(setFilter(searchObj));
  }, [searchParams]);

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialFilters} onSubmit={handleSubmit}>
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
          <Btn type="submit" className={css.btn}>
            Search
          </Btn>
        </Form>
      </Formik>
    </div>
  );
};

export default Filters;
