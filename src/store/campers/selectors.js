import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "store/filters/selectors";
import { selectPagination } from "store/pagination/selectors";

export const selectVehicleEquipList = [
  {
    id: "input-transmission",
    label: "automatic",
    name: "transmission",
    value: "automatic",
    icon: "icon-transmission",
  },
  {
    id: "input-engine",
    label: "petrol",
    name: "engine",
    value: "petrol",
    icon: "icon-engine",
  },
  {
    id: "input-ac",
    label: "ac",
    name: "AC",
    value: false,
    icon: "icon-ac",
  },
  {
    id: "input-bathroom",
    label: "bathroom",
    name: "bathroom",
    value: false,
    icon: "icon-bathroom",
  },
  {
    id: "input-kitchen",
    label: "kitchen",
    name: "kitchen",
    value: false,
    icon: "icon-kitchen",
  },
  {
    id: "input-tv",
    label: "tv",
    name: "TV",
    value: false,
    icon: "icon-tv",
  },
  {
    id: "input-radio",
    label: "radio",
    name: "radio",
    value: false,
    icon: "icon-radio",
  },
  {
    id: "input-refrigerator",
    label: "refrigerator",
    name: "refrigerator",
    value: false,
    icon: "icon-refrigerator",
  },
  {
    id: "input-microwave",
    label: "microwave",
    name: "microwave",
    value: false,
    icon: "icon-microwave",
  },
  {
    id: "input-gas",
    label: "gas",
    name: "gas",
    value: false,
    icon: "icon-gas",
  },
  {
    id: "input-water",
    label: "water",
    name: "water",
    value: false,
    icon: "icon-water",
  },
];

export const selectVehicleFormsList = [
  {
    id: "input-van",
    label: "van",
    name: "form",
    value: "panelTruck",
    icon: "icon-van",
  },
  {
    id: "input-fully_integrated",
    label: "fully integrated",
    name: "form",
    value: "fullyIntegrated",
    icon: "icon-fully_integrated",
  },
  {
    id: "input-alcove",
    label: "alcove",
    name: "form",
    value: "alcove",
    icon: "icon-alcove",
  },
];

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectAllCampers = (state) => state.campers.items ?? {};
export const selectCamperById = (state, id) => state.campers.items?.[id];

export const selectCampers = createSelector(
  [selectAllCampers, selectFilters, selectPagination],
  (campers, filters, pagination) => {
    const filtered = Object.entries(campers).filter(([id, item]) => {
      return Object.entries(filters).every(([key, value]) => {
        try {
          const cond =
            typeof value === "boolean"
              ? !!item?.[key] === value
              : item?.[key]?.toLowerCase()?.includes(value.toLowerCase());
          return cond;
        } catch (error) {
          console.warn(error);
          return Object.values(campers);
        }
      });
    });

    const { page, perPage } = pagination;
    const startIndex = 0;
    const endIndex = page * perPage;

    const paginated = (filtered.slice(startIndex, endIndex) ?? campers).map(
      ([_, value]) => value,
      {}
    );

    return { paginated, filteredTotal: filtered.length };
  }
);
