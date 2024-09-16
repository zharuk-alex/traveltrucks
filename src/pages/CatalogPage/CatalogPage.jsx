import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  selectLoading,
  selectError,
  selectCampers,
} from "store/campers/selectors";
import { fetchCampers } from "store/campers/operations";
import { clearCampers, setAppendMode } from "store/campers/slice";
import CamperItem from "components/CamperItem/CamperItem";
import Filters from "components/Filters/Filters";
import css from "./CatalogPage.module.css";
import clsx from "clsx";
import { setPagination } from "store/pagination/slice";
import { setFilter } from "store/filters/slice";
import { selectPagination } from "store/pagination/selectors";
import { Btn, ItemsGroup, Card } from "components/UI";
import { AppLoader } from "components/UI";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    const { page } = pagination;
    dispatch(setAppendMode(true));
    dispatch(setPagination({ page: Number(page) + 1 }));
  };

  useEffect(() => {
    const searchObj = Object.fromEntries(searchParams.entries());
    dispatch(setFilter(searchObj));
    dispatch(fetchCampers());
  }, [searchParams, pagination.page]);

  const handleSubmit = (values) => {
    dispatch(clearCampers());
    dispatch(setAppendMode(false));
    dispatch(setPagination({ page: 1, total: 0 }));
    setSearchParams(values);
  };

  if (isLoading) {
    return <AppLoader />;
  }

  const showLoadMore = useMemo(
    () => pagination.page < pagination.total,
    [pagination]
  );

  return (
    <div className="page">
      <div className={clsx("container", css.container)}>
        <Filters onSubmit={handleSubmit} />
        <div style={{ flexGrow: 1 }}>
          {!!error && (
            <Card
              variant="error"
              title="An error occurred"
              text={error}
              style={{ maxWidth: 420 }}
            />
          )}
          {campers.length > 0 && (
            <ItemsGroup
              as={CamperItem}
              items={campers}
              className={css.itemsGroup}
            />
          )}
          {!isLoading && showLoadMore && (
            <Btn
              onClick={handleLoadMore}
              className={css.loadMore}
              variant="outlined"
            >
              Load more
            </Btn>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
