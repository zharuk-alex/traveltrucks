import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectLoading,
  selectError,
  selectCampers,
} from "store/campers/selectors";
import { fetchCampers } from "store/campers/operations";
import CamperItem from "components/CamperItem/CamperItem";
import Filters from "components/Filters/Filters";
import css from "./CatalogPage.module.css";
import clsx from "clsx";
import { setPagination } from "store/pagination/slice";
import { selectPagination } from "store/pagination/selectors";
import { Btn, ItemsGroup, Card } from "components/UI";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { paginated, filteredTotal } = useSelector(selectCampers);
  const pagination = useSelector(selectPagination);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    const { page } = pagination;
    dispatch(
      setPagination({
        page: page + 1,
      })
    );
  };

  useEffect(() => {
    dispatch(
      setPagination({
        page: 1,
      })
    );
    dispatch(fetchCampers());
  }, [dispatch]);

  const allCampersLoaded = paginated.length >= filteredTotal;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="page">
      <div className={clsx("container", css.container)}>
        <Filters />
        <div style={{ flexGrow: 1 }}>
          {!!error && (
            <Card variant="error" title="An error occurred" text={error}>
              <Link to="/">
                <Btn>Go to main</Btn>
              </Link>
            </Card>
          )}

          <ItemsGroup
            as={CamperItem}
            items={paginated}
            className={css.itemsGroup}
          />

          {!isLoading && !allCampersLoaded && (
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
