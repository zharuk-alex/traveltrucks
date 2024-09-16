import clsx from "clsx";
import css from "./CamperDetailsPage.module.css";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { fetchCamperById } from "store/campers/operations";
import {
  selectCamperById,
  selectLoading,
  selectError,
} from "store/campers/selectors";
import {
  Btn,
  Card,
  AppLoader,
  ItemsGroup,
  Tabs,
  Modal,
  Thumb,
} from "components/UI";
import CamperHeading from "components/CamperHeading/CamperHeading";
import BookingForm from "components/BookingForm/BookingForm";
import CamperFeatures from "components/CamperFeatures/CamperFeatures";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const camper = useSelector((state) => selectCamperById(state, id));
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const tabsRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const tabsList = ["features", "reviews"];

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (location.pathname.endsWith("/reviews") && tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, tabsRef.current]);

  const { thumbs = [], images = [] } = useMemo(() => {
    if (!camper?.gallery) {
      return { thumbs: [], images: [] };
    }

    return camper.gallery.reduce(
      (acc, { thumb, original }, index) => {
        acc.thumbs.push({ id: index, src: thumb });
        acc.images.push({ id: index, src: original });
        return acc;
      },
      { thumbs: [], images: [] }
    );
  }, [camper]);

  const activeTab = useMemo(() => {
    if (location.pathname.endsWith("/reviews")) {
      return "reviews";
    }
    return "features";
  }, [location]);

  const handleTabClick = (tabName) => {
    if (tabName === "features") {
      navigate(`/catalog/${id}`);
    } else if (tabName === "reviews") {
      navigate(`/catalog/${id}/reviews`);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleThumbClick = ({ id }) => {
    const { src = "" } = images.find((img) => img.id === id);
    setActiveImage(src);
    openModal(true);
  };

  return (
    <div className="page">
      <div className={clsx("container", css.wrapper)}>
        {isLoading && !camper && <AppLoader />}
        {!!error && (
          <Card variant="error" title="An error occurred" text={error}>
            <Link to="/catalog">
              <Btn>Go to campers</Btn>
            </Link>
          </Card>
        )}
        {camper?.id && (
          <>
            <CamperHeading
              id={camper.id}
              title={camper.name}
              price={camper.price}
              rating={camper.rating}
              location={camper.location}
              reviewsLen={camper.reviews?.length ?? 0}
              className={clsx(css.head)}
            />
            <ItemsGroup
              className={css.thumbsSet}
              as={Thumb}
              items={thumbs}
              onClick={handleThumbClick}
            />
            <p className={css.description}>{camper.description}</p>
            <div ref={tabsRef} className={clsx(css.tabs)}>
              <Tabs
                tabs={tabsList}
                active={activeTab}
                onClick={handleTabClick}
              />
            </div>
            <div className={css.row}>
              <div className={clsx(css.column, css[activeTab])}>
                {activeTab === "features" && <CamperFeatures camper={camper} />}
                {activeTab === "reviews" && <Outlet context={camper.reviews} />}
              </div>
              <div className={clsx(css.column, css.form)}>
                <BookingForm />
              </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <img className={css.modalImg} src={activeImage} alt="" />
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default CamperDetailsPage;
